import { Controller } from "@nestjs/common";
import { Get, Query } from "@nestjs/common/decorators";
import { IslandService } from "./island.service";
import { ApiQuery } from "@nestjs/swagger";
import {
  GatherableRarity,
  GatherableType,
} from "src/gatherable/dto/gatherable.dto";

@Controller("island")
export class IslandController {
  constructor(private islandService: IslandService) {}

  @Get()
  getAllIslands() {
    return this.islandService.getAllIslands();
  }

  @Get("behemoth")
  @ApiQuery({ name: "name", type: String, required: true })
  getIslandsByBehemothName(@Query("name") name: string) {
    return this.islandService.getIslandsByBehemothName(name);
  }

  @Get("level")
  @ApiQuery({ name: "min", type: String, required: false })
  @ApiQuery({ name: "max", type: String, required: false })
  getIslandsByLevel(@Query("min") min = "1", @Query("max") max = "24") {
    return this.islandService.getIslandsByLevel(parseInt(min), parseInt(max));
  }

  @Get("gatherable")
  @ApiQuery({ name: "name", type: String, required: false })
  @ApiQuery({ name: "type", enum: GatherableType, required: false })
  @ApiQuery({ name: "rarity", enum: GatherableRarity, required: false })
  getIslandNamesByGatherable(
    @Query("name") name: string,
    @Query("rarity") rarity: GatherableRarity,
  ) {
    return this.islandService.getIslandNamesByGatherable(name, rarity);
  }
}
