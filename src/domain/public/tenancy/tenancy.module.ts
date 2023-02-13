import { Module } from '@nestjs/common';
import { TenancyService } from './tenancy.service';

@Module({
  providers: [TenancyService]
})
export class TenancyModule {}
