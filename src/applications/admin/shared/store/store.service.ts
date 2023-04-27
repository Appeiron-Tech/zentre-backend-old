import { Injectable } from '@nestjs/common'
import { QueryStoreDto } from './dto/queryStoreDto'
import { StoreService as DBStoreService } from 'src/infrastructure/database/store/store.service'
import { UpdateStoreDto } from './dto/updateStoreDto'

@Injectable()
export class StoreService {
  constructor(private dbStoreService: DBStoreService) {}

  // ////////////////////////////////////////////////////////////////////////////// //
  // *********************************  Stores  *********************************** //
  async getStores(storeId: string, queryStore: QueryStoreDto): Promise<any> {
    try {
      if (storeId) queryStore._id = storeId
      return await this.dbStoreService.findStore(queryStore)
    } catch (error) {
      throw error
    }
  }

  async updateStore(storeId: string, store: UpdateStoreDto): Promise<any> {
    try {
      return await this.dbStoreService.updateStore(storeId, store)
    } catch (error) {
      throw error
    }
  }
}
