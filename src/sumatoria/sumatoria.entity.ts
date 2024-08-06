import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'sumatoria'})
export class Sumatoria {
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    numero1: number;
    @Column()
    numero2: number;
    @Column()
    numero3: number;
    @Column()
    resultado: number;    
}
