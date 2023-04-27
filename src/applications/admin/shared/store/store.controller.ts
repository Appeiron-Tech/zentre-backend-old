import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common'
import { isEmptyObj, removeUndefinedKeys } from 'src/applications/shared/utils/jsonUtils'
import { QueryStoreDto } from './dto/queryStoreDto'
import { StoreService } from './store.service'
import { UpdateStoreDto } from './dto/updateStoreDto'

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

  @Patch('/store/:id')
  async updateStore(@Param('id') storeId: string, @Body() rawStore: UpdateStoreDto): Promise<any> {
    try {
      const store = removeUndefinedKeys(rawStore)
      if (storeId || !isEmptyObj(store)) {
        const stores = await this.storeService.updateStore(storeId, store)
        return stores
      }
    } catch (e) {
      console.error(e)
    }
  }

  // @Get('/storesByCompany/:companyId')
  // async getStores(@Param('companyId') companyId: string): Promise<any> {
  //   try {
  //     const stores = await this.homeService.getStores({ companyId: companyId, isMain: true })
  //     return plainToClass(StoreHomeDto, stores[0]) //just the first store, by now
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }
}
