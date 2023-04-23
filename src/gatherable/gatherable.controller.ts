import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common/decorators";
import { GatherableService } from "./gatherable.service";

@Controller("gatherable")
export class GatherableController {
  constructor(private gatherableService: GatherableService) {}

  @Get()
  getAllGatherables() {
    return this.gatherableService.getAllGatherables();
  }

  //   @Get()
  //   @ApiQuery({ name: "name", type: String, required: false })
  //   @ApiQuery({ name: "rarity", enum: GatherableRarity, required: false })
  //   getGatherablesByCraft(
  //     @Query("name") name: string,
  //     // @Query("type") type: GatherableType,
  //     @Query("rarity") rarity: GatherableRarity,
  //   ) {
  //     return this.gatherableService.getIslandNamesByGatherable(name, rarity);
  //   }
}
