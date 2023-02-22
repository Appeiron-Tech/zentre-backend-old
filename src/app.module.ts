import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { HubModule } from './application/tenancy/hub/hub.module'
import { CompanyModule as DBCompanyModule } from './infrastructure/database/company/company.module'
// import { AppController } from './app.controller'
// import { AppService } from './app.service'

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
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
