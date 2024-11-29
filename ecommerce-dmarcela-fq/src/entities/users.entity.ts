import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./orders.entity";

@Entity({name:'USERS'})
export class User {
    
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({ type:'varchar', length: 50, unique: true, nullable: false })
    email: string;
    
    @Column({ type:'varchar', length: 50, nullable: false })
    name: string;

    @Column({ type:'varchar', length: 100, nullable: false })
    password: string;

    @Column({type: 'text'})
    address: string;

    @Column({type: 'bigint'})
    phone: number;

    @Column({type: 'date'})
    birthdate: Date;

    @Column({ type:'varchar', length: 50, nullable: true })
    country: string;

    @Column({ type:'varchar', length: 50, nullable: true })
    city: string;

    @Column({ type:'boolean', default: false })
    isAdmin: boolean;

    @OneToMany(() => Order, (order) => order.user)
    @JoinColumn({name: 'orders_id'}) 
    orders: Order[];
}