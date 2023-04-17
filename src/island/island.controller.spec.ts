import { Test, TestingModule } from "@nestjs/testing";
import { IslandController } from "./island.controller";

describe("GatherableController", () => {
  let controller: IslandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IslandController],
    }).compile();

    controller = module.get<IslandController>(IslandController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
