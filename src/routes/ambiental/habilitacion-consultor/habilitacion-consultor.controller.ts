import { Controller, Get, Post } from '@nestjs/common';
import { HabilitacionConsultorService } from './habilitacion-consultor.service';
import { HabilitacionConsultor } from './habilitacion-consultor.entity';

@Controller('habilitacion-consultor')
export class HabilitacionConsultorController {
    // constructor(private readonly habilitacionConsultorController: HabilitacionConsultorService) { }
    // @Get()
    // async findAll(): Promise<HabilitacionConsultor[]> {
    //     return this.habilitacionConsultorController.findAll();
    // }

    constructor(private readonly habilitacionConsultorService: HabilitacionConsultorService) { }
    @Post('select-columns')
    async findSelectedColumns(): Promise<Partial<HabilitacionConsultor>[]> {
        return this.habilitacionConsultorService.findSelectedColumns();
    }
}
