import { Controller, Get, Post, Param, Body, UseGuards, Request } from '@nestjs/common'
import { UserService } from './user.service'
import { removeUndefinedKeys } from 'src/applications/shared/utils/jsonUtils'
import { CreateUserDto } from './dtos/createUserDto'
import { AuthGuard } from '../auth/Guards/auth.guard'

@Controller('admin/user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get('/:id')
  async getUser(@Request() req, @Param('id') id: string): Promise<any> {
    try {
      const company = await this.userService.getUser({ id: id })
      return company
    } catch (e) {
      console.error(e)
    }
  }

  @Post()
  async createUser(@Body() rawUser: CreateUserDto): Promise<any> {
    try {
      const user = removeUndefinedKeys(rawUser)
      const updatedCompany = await this.userService.createUser(user)
      return updatedCompany
    } catch (e) {
      console.error(e)
    }
  }
}
