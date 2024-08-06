import { Test, TestingModule } from '@nestjs/testing';
import { HabilitacionConsultorController } from './habilitacion-consultor.controller';

describe('HabilitacionConsultorController', () => {
  let controller: HabilitacionConsultorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabilitacionConsultorController],
    }).compile();

    controller = module.get<HabilitacionConsultorController>(HabilitacionConsultorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
