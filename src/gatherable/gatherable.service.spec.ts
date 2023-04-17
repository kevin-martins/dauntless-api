import { Test, TestingModule } from '@nestjs/testing';
import { GatherableService } from './gatherable.service';

describe('GatherableService', () => {
  let service: GatherableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GatherableService],
    }).compile();

    service = module.get<GatherableService>(GatherableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
