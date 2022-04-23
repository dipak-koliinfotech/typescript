import { Banker } from './Banker';
import { Transaction } from './Transaction';
import { Person } from './utils/Person';
import { Column, CreateDateColumn, Entity, UpdateDateColumn, OneToMany, ManyToMany } from "typeorm";


@Entity('client_data')

export class Client extends Person {
    @Column({
        type: "numeric"
    })
    balance: number;

    @Column({
        default: true,
        name: "active"
    })
    is_active: boolean;

    @Column({
        type: "simple-json",
        nullable: true
    })
    additional_info: {
        age: number,
        hair_color: string
    }

    @Column({
        type: "simple-array",
        default: []
    })
    family_members: string[];

    @OneToMany(
        () => Transaction,
        transaction => transaction.client
    )
    transactions: Transaction[]

    @ManyToMany(
        () => Banker
    )
    bankers: Banker[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

} 