import type { Deliver } from "@prisma/client";

export class DeliverEntity implements Deliver {
	id: string;
	id_deliveries: string;
	id_orders: string;
	rating: number;
	createdAt: Date;
	updatedAt: Date;
}
