import { ApiProperty } from '@nestjs/swagger';
import type { Deliver } from '@prisma/client';

export class DeliverEntity implements Deliver {
  @ApiProperty()
  id: string;

  @ApiProperty()
  id_deliveries: string;

  @ApiProperty()
  id_orders: string;

  @ApiProperty()
  rating: number;

  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<DeliverEntity>) {
    Object.assign(this, partial);
  }
}
