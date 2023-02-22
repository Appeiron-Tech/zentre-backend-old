import { Module } from '@nestjs/common'
import { HubService } from './hub.service'
import { HubController } from './hub.controller'
import { HomeModule } from 'src/domain/tenancy/hub/home/home.module'
import { HomeService } from 'src/domain/tenancy/hub/home/home.service'

@Module({
  imports: [HomeModule],
  providers: [HubService, HomeService],
  controllers: [HubController],
})
export class HubModule {}
