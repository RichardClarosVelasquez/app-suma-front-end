import { Controller, Post, Body, Get } from '@nestjs/common';
import { SumatoriaService } from './sumatoria.service';
import { Sumatoria } from './sumatoria.entity';

@Controller('sumatoria')
export class SumatoriaController {
    constructor(private readonly sumatoriaService: SumatoriaService) { }

    @Post()
    create(@Body() body: { numero1: number; numero2: number }): Promise<Sumatoria> {
        const { numero1, numero2 } = body;
        return this.sumatoriaService.create(numero1, numero2);
    }

    @Get()
    findAll(): Promise<Sumatoria[]> {
        return this.sumatoriaService.findAll();
    }
}
