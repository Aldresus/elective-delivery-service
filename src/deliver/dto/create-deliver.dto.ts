import { ApiProperty } from '@nestjs/swagger';

export class CreateDeliverDto {
  @ApiProperty()
  id_user: string;

  @ApiProperty()
  id_order: string;

  @ApiProperty()
  rating?: number;
}
