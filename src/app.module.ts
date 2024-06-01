import { Module } from "@nestjs/common";
import { DeliverModule } from "./deliver/deliver.module";

@Module({
	imports: [DeliverModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
