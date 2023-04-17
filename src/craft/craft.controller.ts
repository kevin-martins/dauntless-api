import { Controller } from "@nestjs/common";
import { CraftService } from "./craft.service";
import { Get } from "@nestjs/common/decorators";

@Controller("craft")
export class CraftController {
  constructor(private craftService: CraftService) {}

  @Get()
  getAllCrafts() {
    return this.craftService.getAllCrafts();
  }
}
