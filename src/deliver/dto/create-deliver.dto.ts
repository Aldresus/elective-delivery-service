import { ApiProperty } from '@nestjs/swagger';

export class CreateDeliverDto {
  @ApiProperty()
  id_deliveries: string;

  @ApiProperty()
  id_orders: string;

  @ApiProperty()
  rating?: number;
}
