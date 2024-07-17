import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SumatoriaModule } from './sumatoria/sumatoria.module';
import { Sumatoria } from './sumatoria/sumatoria.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'Sumatoria',
      entities: [Sumatoria],
      synchronize: true,
    }),
    SumatoriaModule,
  ],
})
export class AppModule {}