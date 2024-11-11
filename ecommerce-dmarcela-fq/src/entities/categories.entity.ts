import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./products.entity";


@Entity()
export class Category {

    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({ type:'varchar', length: 50, nullable: false })
    name:string;

    @OneToMany(() => Product, (product) => product.category)
    @JoinColumn({name: 'products_id'})
    products: Product[];
}