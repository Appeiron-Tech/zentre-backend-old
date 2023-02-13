import { Module } from '@nestjs/common';
import { HubService } from './hub.service';
import { HubController } from './hub.controller';

@Module({
  providers: [HubService],
  controllers: [HubController]
})
export class HubModule {}
