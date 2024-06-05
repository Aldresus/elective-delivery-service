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

  findMany(ids: { id_users: string; id_orders: string }) {
    console.log(ids);

    return this.prisma.deliver.findMany({
      where: {
        AND: [
          {
            id_users:
              ids.id_users === '' ? undefined : ids.id_users,
          },
          { id_orders: ids.id_orders === '' ? undefined : ids.id_orders },
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
