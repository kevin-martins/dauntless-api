import { Module } from "@nestjs/common";
import { CraftModule } from "./craft/craft.module";
import { IslandModule } from "./island/island.module";
import { GatherableModule } from "./gatherable/gatherable.module";
import { IslandService } from "./island/island.service";
import { GatherableService } from "./gatherable/gatherable.service";
import { IslandController } from "./island/island.controller";
import { GatherableController } from "./gatherable/gatherable.controller";

@Module({
  imports: [IslandModule, GatherableModule, CraftModule],
  controllers: [IslandController, GatherableController],
  providers: [IslandService, GatherableService],
})
export class AppModule {}
