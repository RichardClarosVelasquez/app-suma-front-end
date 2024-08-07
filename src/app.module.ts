import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SumatoriaModule } from './sumatoria/sumatoria.module';
import { Sumatoria } from './sumatoria/sumatoria.entity';
import { HabilitacionConsultorModule } from './routes/ambiental/habilitacion-consultor/habilitacion-consultor.module';
import { HabilitacionConsultor } from './routes/ambiental/habilitacion-consultor/habilitacion-consultor.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'al0hech0pech0',
      database: 'certificacionAcustica',
      schema: 'cert_acustica',
      // entities: [Sumatoria, HabilitacionConsultor],
      autoLoadEntities: true,
      synchronize: false,
    }),
    SumatoriaModule,
    HabilitacionConsultorModule,
  ],
})
export class AppModule { }
