import { Controller, Get, Param, Query } from '@nestjs/common'
import { isEmptyObj } from 'src/applications/shared/utils/jsonUtils'
import { QueryStoreDto } from './dto/queryStoreDto'
import { StoreService } from './store.service'

@Controller('admin/hub')
export class StoreController {
  constructor(private storeService: StoreService) {}
  // ////////////////////////////////////////////////////////////////////////////// //
  // *********************************  Stores  *********************************** //
  @Get('/store/:id?')
  async getStore(@Param('id') storeId: string, @Query() queryStore: QueryStoreDto): Promise<any> {
    try {
      if (storeId || !isEmptyObj(queryStore)) {
        const stores = await this.storeService.getStores(storeId, queryStore)
        return stores
      }
    } catch (e) {
      console.error(e)
    }
  }
}
