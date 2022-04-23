import { Client } from './Client';
import { Person } from './utils/Person';
import { Column, CreateDateColumn, Entity, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";


@Entity('banker_data')

export class Banker extends Person {

    @Column({
        unique: true,
        length: 10
    })
    employee_number: string;

    @ManyToMany(
        () => Client
    )

    @JoinTable({
        name: "bankers_clients",
        joinColumn: {
            name: "banker",
            referencedColumnName: "id"
        },
        inverseJoinColumn:{
            name: "client",
            referencedColumnName: "id"
        }
    })

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

} 