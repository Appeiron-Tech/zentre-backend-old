import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { Store, StoreDocument } from './schemas/store.schema'
import { IStore } from './dtos/interfaces/store.interface'
import { ObjectId } from 'mongodb'
import { UpdateStoreDto } from './dtos/updateStoreDto'

@Injectable()
export class StoreService {
  constructor(@InjectModel(Store.name) private storeModel: Model<StoreDocument>) {}

  async findStore(storeQuery: FilterQuery<Store>): Promise<any> {
    return await this.storeModel.find(storeQuery).exec()
  }

  async updateStore(id: string, store: UpdateStoreDto): Promise<IStore> {
    const _id = new ObjectId(id)
    return await this.storeModel.findOneAndUpdate({ _id }, store, { new: true })
  }
}
