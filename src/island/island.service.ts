import { BadRequestException, Injectable } from "@nestjs/common";
// import { CreateIslandDto } from "./dto/islandDto";
import { islands } from "../constant/island";

@Injectable({})
export class IslandService {
  private islands = islands;

  getAllIslands() {
    return this.islands;
  }

  getIslandNamesByBehemothName(name: string) {
    return this.islands
      .filter((island) => {
        const hasBehemoth = island.behemoths.some((behemoth) => {
          return behemoth.name.toLowerCase().includes(name.toLowerCase());
        });
        if (hasBehemoth) {
          return island;
        }
      })
      .map((el) => el.name);
  }

  getIslandsByLevel(min: number, max: number) {
    if (Number.isNaN(min) && Number.isNaN(max)) {
      throw new BadRequestException("min and max are undefined");
    }
    if (min > max) {
      throw new BadRequestException("max lower than min");
    } else if (min < 1 || min > 24) {
      throw new BadRequestException("min out of range: 1 to 24");
    } else if (max < 1 || max > 24) {
      throw new BadRequestException("max out of range: 1 to 24");
    }
    return this.islands.filter((island) => {
      if (Number.isNaN(min)) {
        return island.level.max <= max;
      } else if (Number.isNaN(max)) {
        return island.level.min >= min;
      }
      return island.level.max <= max && island.level.min >= min;
    });
  }
}
