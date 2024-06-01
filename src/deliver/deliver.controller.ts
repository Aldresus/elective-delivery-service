import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DeliverService } from './deliver.service';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { DeliverEntity } from './entities/deliver.entity';
import { CreateDeliverDto } from './dto/create-deliver.dto';

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
  findAll() {
    return this.deliverService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: DeliverEntity })
  findOne(@Param('id') id: string) {
    return this.deliverService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: DeliverEntity })
  update(@Param('id') id: string, @Body() updateDeliverDto) {
    return this.deliverService.update(id, updateDeliverDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: DeliverEntity })
  remove(@Param('id') id: string) {
    return this.deliverService.remove(id);
  }
}
