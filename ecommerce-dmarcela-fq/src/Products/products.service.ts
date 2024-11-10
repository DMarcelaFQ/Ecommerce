import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { Product } from "./product.interface";

@Injectable()
export class ProductsService {
    
    constructor(private productsRepository: ProductsRepository) {}
    
    getProducts(page:number, limit:number) {
        return this.productsRepository.getProduct(page, limit);
    }
    
    getProductById(id: number) {
        return this.productsRepository.getProductById(id);
    }
    
    createProduct(product: Product): Promise<Product> {
        return this.productsRepository.createProduct(product);
    }

    updateProduct(id: number, product: any) {
        return this.productsRepository.updateProduct(id, product);
    }

    deleteProduct(id: number) {
        return this.productsRepository.deleteProduct(id);
    }
}