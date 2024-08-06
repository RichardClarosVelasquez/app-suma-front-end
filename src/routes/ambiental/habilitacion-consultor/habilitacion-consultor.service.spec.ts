import { Test, TestingModule } from '@nestjs/testing';
import { HabilitacionConsultorService } from './habilitacion-consultor.service';

describe('HabilitacionConsultorService', () => {
  let service: HabilitacionConsultorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HabilitacionConsultorService],
    }).compile();

    service = module.get<HabilitacionConsultorService>(HabilitacionConsultorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
