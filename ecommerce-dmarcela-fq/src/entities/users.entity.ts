import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./orders.entity";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({ length: 50, unique: true, nullable: false })
    email: string;
    
    @Column({ length: 50, nullable: false })
    name: string;

    @Column({ length: 20, nullable: false })
    password: string;

    @Column("text")
    address: string;

    @Column("bigint")
    phone: string;

    @Column({ length: 50, nullable: true })
    country: string;

    @Column({ length: 50, nullable: true })
    city: string;

    @OneToMany(() => Order, (order) => order.user)
    @JoinColumn({name: 'orders_id'}) 
    orders: Order[];
}