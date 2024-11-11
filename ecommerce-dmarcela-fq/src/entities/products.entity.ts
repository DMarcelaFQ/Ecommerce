import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./categories.entity";
import { OrderDetail } from "./orderDetails.entity";


@Entity()
export class Product {

    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({ length: 50, nullable: false })
    name:string;

    @Column("text", { nullable: false })
    description:string;

    @Column("decimal", { precision: 10, scale: 2, nullable: false })
    price:number;

    @Column("int", { nullable: false })
    stock:number;

    @Column({ default: "https://example.com/default-image.jpg" })
    imgUrl:string;

    @ManyToOne(() => Category, (category) => category.products, { nullable: false }) 
    @JoinColumn({name: 'category_id'})
    category: Category;

    @ManyToMany(() => OrderDetail, (orderDetail) => orderDetail.products) 
    orderDetails: OrderDetail[];
}