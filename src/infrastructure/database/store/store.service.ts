import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model } from 'mongoose'
import { Store, StoreDocument } from './schemas/store.schema'

@Injectable()
export class StoreService {
  constructor(@InjectModel(Store.name) private storeModel: Model<StoreDocument>) {}

  async findStore(storeQuery: FilterQuery<Store>): Promise<any> {
    return await this.storeModel.find(storeQuery).exec()
  }
}
