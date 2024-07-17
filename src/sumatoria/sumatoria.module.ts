import { Module } from '@nestjs/common';
import { SumatoriaController } from './sumatoria.controller';
import { SumatoriaService } from './sumatoria.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sumatoria } from './sumatoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sumatoria])],
  controllers: [SumatoriaController],
  providers: [SumatoriaService]
})
export class SumatoriaModule {}
