import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { HubCompanySn, HubCompanySnSchema } from '../hub/schemas/hubCompanySn.schema'
import { HubCompany, HubCompanySchema } from '../hub/schemas/hubCompany.schema'
import { HubService } from './hub.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HubCompany.name, schema: HubCompanySchema },
      { name: HubCompanySn.name, schema: HubCompanySnSchema },
    ]),
  ],
  providers: [HubService],
  exports: [HubService, MongooseModule],
})
export class HubModule {}
