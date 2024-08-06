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

    async findAll(): Promise<HabilitacionConsultor[]> {
        return await this.habilitacionConsultorRepository.find();
    }
}
