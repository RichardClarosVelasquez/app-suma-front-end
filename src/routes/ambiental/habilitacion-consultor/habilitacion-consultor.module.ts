import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabilitacionConsultorController } from './habilitacion-consultor.controller';
import { HabilitacionConsultorService } from './habilitacion-consultor.service';
import { HabilitacionConsultor } from './habilitacion-consultor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HabilitacionConsultor])],
  controllers: [HabilitacionConsultorController],
  providers: [HabilitacionConsultorService]
})
export class HabilitacionConsultorModule {}
