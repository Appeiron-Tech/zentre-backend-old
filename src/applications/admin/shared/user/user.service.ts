import { Injectable } from '@nestjs/common'
import { UserService as DBUserService } from 'src/infrastructure/database/user/user.service'
import { IUser } from './interfaces/IUser.interface'

@Injectable()
export class UserService {
  constructor(private dbUserService: DBUserService) {}

  async createUser(user): Promise<any> {
    try {
      return await this.dbUserService.createUser(user)
    } catch (error) {
      throw error
    }
  }

  async getUser(params: { id?: string; email?: string }): Promise<IUser> {
    try {
      return await this.dbUserService.findUser(params)
    } catch (error) {
      throw error
    }
  }
}
