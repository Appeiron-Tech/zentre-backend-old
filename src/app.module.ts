import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { HubModule } from './application/tenancy/hub/hub.module'
import { CompanyModule as DBCompanyModule } from './infrastructure/database/company/company.module'
import { ContactModule as DBContactModule } from './infrastructure/database/contact/contact.module'
import { StoreModule as DBStoreModule } from './infrastructure/database/store/store.module'
import { ProductModule as DBProductModule } from './infrastructure/database/product/product.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_DB'),
      }),
      inject: [ConfigService],
    }),
    //Application
    HubModule,
    //Infrastructure
    DBCompanyModule,
    DBContactModule,
    DBStoreModule,
    DBProductModule,
  ],
})
export class AppModule {}
