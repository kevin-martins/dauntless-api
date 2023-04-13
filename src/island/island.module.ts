import { Module } from "@nestjs/common";
import { IslandController } from "./island.controller";
import { IslandService } from "./island.service";

@Module({
  controllers: [IslandController],
  providers: [IslandService],
})
export class IslandModule {}
