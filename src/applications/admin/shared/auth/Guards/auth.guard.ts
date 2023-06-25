import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { Request } from 'express'
import * as firebase from 'firebase-admin'

const firebaseConfig = {
  type: 'service_account',
  projectId: 'zentre-app',
  privateKeyId: '0ee694ca6c3263d5722b8aaaac607b75489ec4c8',
  privateKey:
    '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDGtTlQUUuea3qG\nOEHc4xHt3DPpvn9+a5EFdlLaUD9WM5J5uxgZFANTkuTSkA0QbEAClYldlSKNO18t\nR//91GxT/oqG55FQ29Ys/5+n0X31aSCVZjaHAtgtNOpvgsGZvTbcTiJk/KwZ+Rkz\nTpNB6Gwx9pB/L5g8aN2FYIF9989gGi1UpLIvV2uXdlK6vsm5ho6szWB23M9oRQ2k\nTGV/d2v+CM9wvAbM4dmoJwDZZfLU0yyW55yk/605fjook5IUJXS3uQHHmQdbHxqe\n+5cizkEaQ0m7VdJwJOywr/QMQsCa8VJUW2ISMsXaC+YB+MExJcbStIpC/rJr4SPO\n7CQpP9IxAgMBAAECggEALK3zBSxCZIymMCfWJ2SnU2SAB77dy/9DzIaeepgwpaFS\n/iwjbwAg/1m4OeBKD7dHbU1SZchyzG7dJ8FYvipVcU16uHq5IgVMUzHnJETmnZfV\ny8H/4Luy//c1/3zXK0pwW3j2It7tk6l/ERpJ4jfwnAtk0jRRdsPdi2/3retapbDX\nn+8NYyH9QY5X+dEP6JptLUg8/hI/ajDNWa82jGwudlLBSHtQfA78bgXsSqX4CwAW\nB4onhjNhpeUyFJT7X32pcCxpPV8GFihRPYuo8XUlmMgrnQQaLdbXLvA+zWmuZQXo\nOT1vl+o1MP5ncaUDvBdPT714+2/Ds0MaUI1bISAcQQKBgQDqWI74VU605H8HU2uG\nTFe2xRXFCN0L9mTOFVCtRlmFsmpjCFwcfoy7d0c/FcrzLNeh7IJ/cGwFakOqtlUS\nX/pCNK1mmqxWGpB7s9T0nkKg8wOn/Jh9foUTYZTRLFyXvcJayhgkjYvmhMDeXG5I\nezIe7soxJn4Xl56gd+OqLnAKXwKBgQDZEaZPoizXb8bDnjQ9swyN1Y5Kbx/Fuvmw\ngWxJ8wYVgT5lQ3cbp5ECcm5y0FowARDtNV8D56uzmb3lcZDGgWxczJpQPBGZ0Eod\nSbXy5d05EQz3i1J4fSRZEdN2TYueL2Jv6TnqCZ+yG/ibhRTNMOVIJmdHKs3kb4VD\n5uHqTSuNbwKBgQCn0Ytw4wZeHFOrl12k6v7VcAXK+DHz4xsFSdZgf8SULdRp3w63\niRiXFy/6SUzxH+e7mXdKc+OnbRXQJop9giXhS3/xvkozzwowy/NwyfTE9cJkhktd\nc0ExQ+wibzZPpCCOi7MGWicZiW/kzSRc23xlEnPRBtO9aWK7X5+1u1OY2QKBgCG+\niKgggfALxE5srZpZ1z3FURVpKPtIEcDKndbxHKUDLnv3fPCjn/tNZrYahaqov8Tg\nYyDsRtjosYiVmvgA7qOOev62F9ZddugOqWZVLYrNh8KDuhJZAemGx+TAMVAp9ZeI\nHiSv0k+R4ZfrnEw5qasJrUx27wLwAzuHDN+rl3WpAoGBAJmCT/a9QC1oPmzoFWxE\nx2CqT9lsCUJnxsylhBhCEJW/T+9SHsRETaQ02wSDV2Qn1PvoJgbpSMMkbHBOLnjw\nEPwI8fVA4muGQOt0CjjOvoY4phWRZ2eJUueotlRrb8noP1TcB7vGPBpx6JXFL7R7\n8XsjaeXFLzruB0GLOdqE6PI9\n-----END PRIVATE KEY-----\n',
  clientEmail: 'firebase-adminsdk-fxfso@zentre-app.iam.gserviceaccount.com',
  clientId: '100636591482499798749',
  authUri: 'https://accounts.google.com/o/oauth2/auth',
  tokenUri: 'https://oauth2.googleapis.com/token',
  authProviderX509CertUrl: 'https://www.googleapis.com/oauth2/v1/certs',
  clientX509CertUrl:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fxfso%40zentre-app.iam.gserviceaccount.com',
  universeDomain: 'googleapis.com',
}

@Injectable()
export class AuthGuard implements CanActivate {
  // constructor(private jwtService: JwtService) {}
  private defaultApp: any
  constructor() {
    this.defaultApp = firebase.initializeApp({
      credential: firebase.credential.cert(firebaseConfig),
    })
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const token = this.extractTokenFromHeader(request)
    if (!token) {
      throw new UnauthorizedException()
    }
    try {
      const payload = await this.defaultApp.auth().verifyIdToken(token)
      console.info('Payload: ')
      console.info(payload)
      console.info('-----------------------------------------')

      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['user'] = payload
    } catch {
      throw new UnauthorizedException()
    }
    return true
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined
  }
}
