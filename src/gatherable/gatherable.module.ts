import { Module } from "@nestjs/common";
import { GatherableService } from "./gatherable.service";
import { GatherableController } from "./gatherable.controller";

@Module({
  controllers: [GatherableController],
  providers: [GatherableService],
})
export class GatherableModule {}
