import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";
import { OrderDetail } from "./orderDetails.entity";


@Entity()
export class Order {

    @PrimaryGeneratedColumn("uuid") 
    id: string;

    @ManyToOne(() => User, (user) => user.orders, { nullable: false })
    @JoinColumn({name: 'User_id'})
    user: User;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }) 
    date: Date;

    @OneToOne(() => OrderDetail, { cascade: true })
    @JoinColumn({name: 'orderDetail_id'})
    orderDetail: OrderDetail;
}