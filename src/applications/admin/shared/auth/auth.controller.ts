import { AuthLoginDto } from './Dtos/login.dto'
import { AuthService } from './auth.service'
import { Controller, Get, Body, HttpCode, Post, HttpStatus } from '@nestjs/common'
import { AES, enc } from 'crypto-js'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @Get('/admin')
  async getUser(@Body() loginDto: AuthLoginDto): Promise<any> {
    console.info()
  }
}
