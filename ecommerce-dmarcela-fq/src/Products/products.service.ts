import { Injectable, NotFoundException } from "@nestjs/common";
import * as data from "../assets/data.json"
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/entities/products.entity";
import { Repository } from "typeorm";
import { Category } from "src/entities/categories.entity";

@Injectable()
export class ProductsService {
    
    constructor(
        @InjectRepository(Product) 
        private productsRepository: Repository<Product>,
        @InjectRepository(Category)
        private categoriesRepository: Repository<Category>
    ) {}
    
    async addProducts() {
        const categories = await this.categoriesRepository.find();

        data?.map(async (element) => {
            const category = categories.find(
                (category) => category.name === element.category,
            )
            const product = new Product();
            product.name = element.name;
            product.description = element.description;
            product.price = element.price;
            product.stock = element.stock;
            product.category = category;

            await this.productsRepository
            .createQueryBuilder()
            .insert()
            .into(Product)
            .values(product)
            .orUpdate(['description', 'price', 'stock'], ['name'])
            .execute()
        });
        return "Products added"

    }

    async getProducts(page:number, limit:number) {
        const start = (page - 1)*limit;
        const products = await this.productsRepository.find({skip: start, take: limit});

        if(products.length === 0) {
            throw new NotFoundException('No se encontraron productos en la base de datos.');
        }
        return products;
    }

    async getProductById(id: string) {
        
        const product = await this.productsRepository.findOne({
            where: { id: id }
        });
        if (!product) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado.`);
        }
        return product
    }
    
    async createProduct(product: Product) {
        const newProduct = this.productsRepository.create(product);
        return await this.productsRepository.save(newProduct);
    }
    
    async updateProduct(id: string, product: Partial<Product>) {
        const productUpdate = await this.productsRepository.findOneBy({ id });
        if (!productUpdate) {
            throw new NotFoundException(`Producto con ID ${id} no encontrado.`);
        }
        Object.assign(productUpdate, product);
        return await this.productsRepository.save(productUpdate);
    }
    
    async deleteProduct(id: string) {
        const product = await this.productsRepository.findOneBy({ id });
        if (!product) {
        throw new NotFoundException(`Producto con ID ${id} no encontrado.`);
        }

        await this.productsRepository.remove(product);
        return { message: `Producto con ID ${id} eliminado correctamente.` };
    }
    
}