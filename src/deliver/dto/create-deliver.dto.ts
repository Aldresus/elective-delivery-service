import { ApiProperty } from '@nestjs/swagger';

export class CreateDeliverDto {
  @ApiProperty()
  id_users: string;

  @ApiProperty()
  id_orders: string;

  @ApiProperty()
  rating?: number;
}
