import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sumatoria {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    numero1: number;
    @Column()
    numero2: number;
    @Column()
    resultado: number;
}
