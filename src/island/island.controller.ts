import { Controller } from "@nestjs/common";
import { Get, Query } from "@nestjs/common/decorators";
import { IslandService } from "./island.service";
import { GatherableRarity, GatherableType } from "src/gatherable/dto/gatherable.dto";

@Controller("island")
export class IslandController {
  constructor(private islandService: IslandService) {}

  @Get()
  getAllIslands() {
    return this.islandService.getAllIslands();
  }

  @Get("behemoth")
  getIslandNamesByBehemothName(@Query("name") name: string) {
    return this.islandService.getIslandNamesByBehemothName(name);
  }

  @Get("level")
  getIslandsByLevel(@Query("min") min: string, @Query("max") max: string) {
    return this.islandService.getIslandsByLevel(parseInt(min), parseInt(max));
  }

  @Get("gatherable")
  getIslandNamesByGatherable(
    @Query("name") name: string,
    @Query("type") type: string,
    @Query("rarity") rarity: string,
  ) {
    return { name, type, rarity };
  }
}
