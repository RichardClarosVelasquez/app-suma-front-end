import { Test, TestingModule } from '@nestjs/testing';
import { SumatoriaController } from './sumatoria.controller';

describe('SumatoriaController', () => {
  let controller: SumatoriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SumatoriaController],
    }).compile();

    controller = module.get<SumatoriaController>(SumatoriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
