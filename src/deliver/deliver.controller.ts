import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { DeliverService } from './deliver.service';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { DeliverEntity } from './entities/deliver.entity';
import { CreateDeliverDto } from './dto/create-deliver.dto';
import { UpdateDeliverDto } from './dto/update-deliver.dto';

@Controller('deliver')
@ApiTags('deliver')
export class DeliverController {
  constructor(private readonly deliverService: DeliverService) {}

  @Post()
  @ApiCreatedResponse({ type: DeliverEntity })
  @ApiBody({ type: CreateDeliverDto })
  create(@Body() createDeliverDto) {
    return this.deliverService.create(createDeliverDto);
  }

  @Get()
  @ApiCreatedResponse({ type: DeliverEntity, isArray: true })
  findAll(
    @Query('id_deliveries') idDeliveries: string,
    @Query('id_orders') idOrders: string,
  ) {
    console.log(idDeliveries, idOrders);

    return this.deliverService.findMany({
      id_deliveries: idDeliveries,
      id_orders: idOrders,
    });
  }

  //maybe get deliveries by rating

  @Patch(':id')
  @ApiCreatedResponse({ type: DeliverEntity })
  @ApiBody({ type: UpdateDeliverDto })
  update(@Param('id') id: string, @Body() updateDeliverDto) {
    return this.deliverService.update(id, updateDeliverDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: DeliverEntity })
  remove(@Param('id') id: string) {
    return this.deliverService.remove(id);
  }
}
