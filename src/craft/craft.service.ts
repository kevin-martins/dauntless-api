import { Injectable } from "@nestjs/common";
import * as crafts from "../constant/craft.json";

@Injectable()
export class CraftService {
  private crafts = crafts;

  getAllCrafts() {
    return this.crafts;
  }
}
