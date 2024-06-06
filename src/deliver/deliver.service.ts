import { Injectable } from '@nestjs/common';
import type { CreateDeliverDto } from './dto/create-deliver.dto';
import type { UpdateDeliverDto } from './dto/update-deliver.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DeliverService {
  constructor(private prisma: PrismaService) {}

  create(createDeliverDto: CreateDeliverDto) {
    console.log(createDeliverDto);

    return this.prisma.deliver.create({
      data: createDeliverDto,
    });
  }

  findMany(ids: {
    id_user: string;
    id_order: string;
    rating_e: number;
    rating_gt: number;
    rating_lt: number;
  }) {
    console.log(ids);

    return this.prisma.deliver.findMany({
      where: {
        AND: [
          {
            id_user: ids.id_user === '' ? undefined : ids.id_user,
          },
          {
            id_order: ids.id_order === '' ? undefined : ids.id_order,
          },
          {
            rating: {
              equals: ids.rating_e,
              gt: ids.rating_gt,
              lt: ids.rating_lt,
            },
          },
        ],
      },
    });
  }

  update(id: string, updateDeliverDto: UpdateDeliverDto) {
    return this.prisma.deliver.update({
      where: {
        id,
      },
      data: updateDeliverDto,
    });
  }

  remove(id: string) {
    return this.prisma.deliver.delete({
      where: {
        id,
      },
    });
  }
}
