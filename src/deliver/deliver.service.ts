import { Injectable } from '@nestjs/common';
import type { CreateDeliverDto } from './dto/create-deliver.dto';
import type { UpdateDeliverDto } from './dto/update-deliver.dto';

@Injectable()
export class DeliverService {
  create(createDeliverDto: CreateDeliverDto) {
    return 'This action adds a new deliver';
  }

  findAll() {
    return `This action returns all deliver`;
  }

  findOne(id: string) {
    return `This action returns a #${id} deliver`;
  }

  update(id: string, updateDeliverDto: UpdateDeliverDto) {
    return `This action updates a #${id} deliver`;
  }

  remove(id: string) {
    return `This action removes a #${id} deliver`;
  }
}
