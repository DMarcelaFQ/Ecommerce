import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./products.entity";


@Entity({name:'CATEGORIES'})
export class Category {

    @PrimaryGeneratedColumn("uuid")
    id:string;

    @Column({ type:'varchar', length: 50, unique: true, nullable: false })
    name:string;

    @OneToMany(() => Product, (product) => product.category)
    @JoinColumn({name: 'products_id'})
    products: Product[];
}