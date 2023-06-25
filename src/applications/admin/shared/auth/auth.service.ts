import { Injectable, UnauthorizedException } from '@nestjs/common'
// import { AuthService as GoogleAuthService } from 'src/applications/shared/ThirdParty/Google/Auth/auth.service'
import { UserService } from '../user/user.service'
// import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    // private authService: GoogleAuthService,
    private userService: UserService, // private jwtService: JwtService,
  ) {}

  // async signIn(email: string, password: string) {
  //   try {
  //     const response = this.authService.signInWithEmailPassword(email, password) as any
  //     if (response.user) {
  //       //TODO: Update user in DB
  //       const user = await this.userService.getUser({ email: response.user.email })
  //       const payload = {
  //         sub: user._id,
  //         name: user.name,
  //         companyId: user.companyId,
  //         email: user.email,
  //       }
  //       return {
  //         access_token: await this.jwtService.signAsync(payload),
  //       }
  //       // return JSON.stringify(response.user)
  //     }
  //     throw new Error("google doesn't response")
  //   } catch (error: any) {
  //     console.log('Firebase Auth:', error.message)
  //     throw new UnauthorizedException()
  //   }
  // }
}
