import { Get, Injectable } from "@nestjs/common";
import * as gatherables from "../constant/gatherables.json";

@Injectable()
export class GatherableService {
  private gatherables = gatherables;

  @Get()
  getAllGatherables() {
    return this.gatherables;
  }
}
