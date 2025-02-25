import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/entities/products.entity";
import { Category } from "src/entities/categories.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Product]),
        TypeOrmModule.forFeature([Category])
    ],
    providers: [ ProductsService ],
    controllers: [ ProductsController]
})
export class ProductsModule {}