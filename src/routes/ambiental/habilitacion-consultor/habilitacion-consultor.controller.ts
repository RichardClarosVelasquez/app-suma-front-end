import { Controller, Get } from '@nestjs/common';
import { HabilitacionConsultorService } from './habilitacion-consultor.service';
import { HabilitacionConsultor } from './habilitacion-consultor.entity';

@Controller('habilitacion-consultor')
export class HabilitacionConsultorController {
    constructor(private readonly habilitacionConsultorController: HabilitacionConsultorService) { }

    @Get()
    async findAll(): Promise<HabilitacionConsultor[]> {
        return this.habilitacionConsultorController.findAll();
    }
}
