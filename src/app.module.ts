import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { CommerceModule } from './applications/commerce/commerce.module'
import { HomeModule } from './applications/hub/home/home.module'
import { HomeModule as ADMHomeModule } from './applications/admin/hub/home/home.module'
import { StoreModule as ADMStoreModule } from './applications/admin/shared/store/store.module'
import { UserModule as ADMUserModule } from './applications/admin/shared/user/user.module'
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
    //Hub
    HomeModule,
    CommerceModule,
    //Admin
    ADMHomeModule,
    ADMStoreModule,
    ADMUserModule,
  ],
})
export class AppModule {}
