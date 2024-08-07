// entities/your-entity.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'consultor'})
export class HabilitacionConsultor {
    @PrimaryGeneratedColumn()
    id_consultor?: number;
    @Column({ nullable: true})
    ci_consultor: string;
    @Column({ nullable: true})
    complemento_consultor: string;
    @Column({ nullable: true})
    expedido: string;
    @Column({ nullable: true})
    nombres: string;
    @Column({ nullable: true})
    ap_paterno: string;
    @Column({ nullable: true})
    ap_materno: string;
    @Column({ nullable: true})
    tercer_apellido: string;
    @Column({ nullable: true})
    profesion: string;
    @Column({ nullable: true})
    fecha_emision_renca: Date;
    @Column({ nullable: true})
    nro_renca: string;
    @Column({ nullable: true})
    domicilio: string;
    @Column({ nullable: true})
    telefono: string;
    @Column({ nullable: true})
    fecha_vencimiento_renca: Date;
    @Column({ nullable: true})
    celular: string;
    @Column({ nullable: true})
    categoria: string;
    @Column({ nullable: true})
    oid_consultor: string;
    @Column({ nullable: true})
    id_estado: number;
    @Column({ nullable: true})
    ruta_adjunto: string; //es text en postgresql
    @Column({ nullable: true})
    tipo_adjunto: number;
}
