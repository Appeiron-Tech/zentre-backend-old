import { Module } from '@nestjs/common';
import { AnnoucementService } from './annoucement.service';

@Module({
  providers: [AnnoucementService]
})
export class AnnoucementModule {}
