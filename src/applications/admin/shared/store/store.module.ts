import { Module } from '@nestjs/common'
import { StoreController } from './store.controller'
import { StoreService } from './store.service'
import { StoreModule as DBStoreModule } from 'src/infrastructure/database/store/store.module'
import { StoreService as DBStoreService } from 'src/infrastructure/database/store/store.service'

@Module({
  imports: [DBStoreModule],
  controllers: [StoreController],
  providers: [StoreService, DBStoreService],
})
export class StoreModule {}
