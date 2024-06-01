import { Module } from '@nestjs/common';
import { DeliverService } from './deliver.service';
import { DeliverController } from './deliver.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DeliverController],
  providers: [DeliverService, PrismaService],
})
export class DeliverModule {}
