import { Module } from '@nestjs/common'
import { UserModule } from '../user/user.module'
// import { JwtModule } from '@nestjs/jwt'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'

@Module({
  imports: [
    UserModule,
    // JwtModule.register({
    //   global: true,
    //   secret: 'zentre',
    //   // signOptions: { expiresIn: '60s' },
    // }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
