import { Test, TestingModule } from '@nestjs/testing';
import { DeliverService } from './deliver.service';

describe('DeliverService', () => {
  let service: DeliverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliverService],
    }).compile();

    service = module.get<DeliverService>(DeliverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
