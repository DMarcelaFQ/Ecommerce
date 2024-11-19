import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";
import { OrderDetail } from "./orderDetails.entity";


@Entity({name:'ORDERS'})
export class Order {

    @PrimaryGeneratedColumn("uuid") 
    id: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }) 
    date: Date;

    @ManyToOne(() => User, (user) => user.orders)
    @JoinColumn({name: 'user_id'})
    user: User;

    @OneToOne(() => OrderDetail, (orderDetails)=> orderDetails.order, { cascade: true })
    @JoinColumn({name: 'orderDetails_id'})
    orderDetail: OrderDetail;
}