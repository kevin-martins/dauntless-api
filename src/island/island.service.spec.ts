import { Test, TestingModule } from "@nestjs/testing";
import { IslandService } from "./island.service";

describe("IslandService", () => {
  let service: IslandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IslandService],
    }).compile();

    service = module.get<IslandService>(IslandService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
