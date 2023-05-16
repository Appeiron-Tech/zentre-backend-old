import { Controller, Get, Post, Param, Body } from '@nestjs/common'
import { UserService } from './user.service'
import { removeUndefinedKeys } from 'src/applications/shared/utils/jsonUtils'
import { CreateUserDto } from './dtos/createUserDto'

@Controller('admin/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:id')
  async getUser(@Param('id') id: string): Promise<any> {
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
