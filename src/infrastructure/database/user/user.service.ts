import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './schemas/user.schema'
import { FilterQuery, Model } from 'mongoose'
import { ObjectId } from 'mongodb'
import { IUser } from './interfaces/user.interface'
import { CreateUserDto } from './dtos/createUserDto'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findUser(userQuery: FilterQuery<User>): Promise<any> {
    return await this.userModel.find(userQuery).exec()
  }

  async createUser(user: CreateUserDto): Promise<IUser> {
    return await this.userModel.create(user)
  }
}
