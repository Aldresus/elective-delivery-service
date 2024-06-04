import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliverDto } from './create-deliver.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDeliverDto extends PartialType(CreateDeliverDto) {
  @ApiProperty({ required: false })
  id_users?: string;

  @ApiProperty({ required: false })
  id_orders?: string;

  @ApiProperty({ required: false })
  rating?: number;
}
