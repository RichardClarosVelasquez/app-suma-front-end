import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sumatoria } from './sumatoria.entity';

@Injectable()
export class SumatoriaService {
    constructor(
        @InjectRepository(Sumatoria)
        private sumatoriaRepository: Repository<Sumatoria>,
    ) { }

    async create(numero1: number, numero2: number, numero3: number): Promise<Sumatoria> {
        const resultado = numero1 + numero2 + numero3;
        const sumatoria = this.sumatoriaRepository.create({ numero1, numero2, numero3, resultado });
        return this.sumatoriaRepository.save(sumatoria);
    }

    async findAll(): Promise<Sumatoria[]> {
        return this.sumatoriaRepository.find();
    }
}
