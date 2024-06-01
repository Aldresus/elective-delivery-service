import { Test, TestingModule } from '@nestjs/testing';
import { DeliverController } from './deliver.controller';

describe('DeliverController', () => {
  let controller: DeliverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliverController],
    }).compile();

    controller = module.get<DeliverController>(DeliverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
