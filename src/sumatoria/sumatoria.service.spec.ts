import { Test, TestingModule } from '@nestjs/testing';
import { SumatoriaService } from './sumatoria.service';

describe('SumaService', () => {
  let service: SumatoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SumatoriaService],
    }).compile();

    service = module.get<SumatoriaService>(SumatoriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
