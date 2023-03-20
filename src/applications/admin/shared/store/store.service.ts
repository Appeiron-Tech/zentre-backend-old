import { Injectable } from '@nestjs/common'
import { QueryStoreDto } from './dto/queryStoreDto'
import { StoreService as DBStoreService } from 'src/infrastructure/database/store/store.service'

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
}
