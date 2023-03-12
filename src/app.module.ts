import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { HubModule } from './application/hub/hub.module'
import { CommerceModule } from './application/commerce/commerce.module'
import { CompanyModule as DBCompanyModule } from './infrastructure/database/company/company.module'
import { ContactModule as DBContactModule } from './infrastructure/database/contact/contact.module'
import { StoreModule as DBStoreModule } from './infrastructure/database/store/store.module'
import { ProductModule as DBProductModule } from './infrastructure/database/product/product.module'
import { AnnouncementModule as DBAnnouncementModule } from './infrastructure/database/announcement/announcement.module'
import { SurveyModule as DBSurveyModule } from './infrastructure/database/survey/survey.module'
import { CommerceModule as DNCommerceModule } from './domain/commerce/commerce.module'
import { SignUpModule as DNSignUpModule } from './domain/sign-up/sign-up.module'
import { BookingModule as DNBookingModule } from './domain/booking/booking.module'

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
    CommerceModule,
    // //Domain
    // DNHubModule,
    // DNCommerceModule,
    // DNSignUpModule,
    // DNBookingModule,
    // //Infrastructure
    // DBAnnouncementModule,
    // DBCompanyModule,
    // DBContactModule,
    // DBProductModule,
    // DBStoreModule,
    // DBSurveyModule,
  ],
})
export class AppModule {}
