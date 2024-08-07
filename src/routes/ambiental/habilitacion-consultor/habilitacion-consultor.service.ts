import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HabilitacionConsultor } from './habilitacion-consultor.entity';

@Injectable()
export class HabilitacionConsultorService {
    constructor(
        @InjectRepository(HabilitacionConsultor)
        private readonly habilitacionConsultorRepository: Repository<HabilitacionConsultor>,
    ) { }

    // async findAll(): Promise<HabilitacionConsultor[]> {
    //     return await this.habilitacionConsultorRepository.find();
    // }

    async findSelectedColumns(): Promise<Partial<HabilitacionConsultor>[]> {
        return this.habilitacionConsultorRepository.find({
            select: ['id_consultor','nombres','ap_paterno','ap_materno','tercer_apellido'], // Cambia 'column1', 'column2' y 'column3' por los nombres reales de las columnas
        });
    }
}
