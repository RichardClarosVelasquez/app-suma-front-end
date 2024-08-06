// entities/your-entity.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'consultor'})
export class HabilitacionConsultor {
    @PrimaryGeneratedColumn()
    id_consultor?: number;
    // @Column()
    // ci_consultor: string;
    // @Column()
    // complemento_consultor: string;
    // @Column()
    // expedido: string;
    // @Column()
    // nombres: string;
    // @Column()
    // ap_paterno: string;
    // @Column()
    // ap_materno: string;
    // @Column()
    // tercer_apellido: string;
    // @Column()
    // profesion: string;
    // @Column()
    // fecha_emision_renca: Date;
    // @Column()
    // nro_renca: string;
    // @Column()
    // domicilio: string;
    // @Column()
    // telefono: string;
    // @Column()
    // fecha_vencimiento_renca: Date;
    // @Column()
    // celular: string;
    // @Column()
    // categoria: string;
    // @Column()
    // oid_consultor: string;
    @Column()
    id_estado: number;
    // @Column()
    // ruta_adjunto: string; //es text en postgresql
    // @Column()
    // tipo_adjunto: number;
}
