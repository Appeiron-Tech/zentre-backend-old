import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService as DBUserService } from 'src/infrastructure/database/user/user.service'
import { UserService } from './user.service'
import { UserModule as DBUserModule } from 'src/infrastructure/database/user/user.module'

@Module({
  imports: [DBUserModule],
  providers: [UserService, DBUserService],
  controllers: [UserController],
})
export class UserModule {}
