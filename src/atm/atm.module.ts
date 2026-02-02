import { Module } from '@nestjs/common';
import { AtmController } from './atm.controller';
import { AtmService } from './providers/atm.service';

@Module({
  controllers: [AtmController],
  providers: [AtmService]
})
export class AtmModule {}
