import { IsNotEmpty, IsString } from 'class-validator'

export class AuthLoginDto {
  @IsNotEmpty()
  @IsString()
  provider: string

  @IsNotEmpty()
  @IsString()
  data: string
}
