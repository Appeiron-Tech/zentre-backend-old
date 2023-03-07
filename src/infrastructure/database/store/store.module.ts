import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { Store, StoreSchema } from './schemas/store.schema'
import { StoreService } from './store.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }])],
  providers: [StoreService],
  exports: [StoreService, MongooseModule],
})
export class StoreModule {}
