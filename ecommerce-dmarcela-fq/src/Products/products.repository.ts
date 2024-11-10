import { Injectable } from "@nestjs/common";
import { Product } from "./product.interface";

@Injectable()
export class ProductsRepository {
    private products = [
        {
            id: 1,
            name: "RascadorA",
            description: "black",
            price: 150000,
            stock: true,
            imgUrl: "www.blackrascador.jpg"
        },
        {
            id: 2,
            name: "RascadorB",
            description: "white",
            price: 150000,
            stock: true,
            imgUrl: "www.whiterascador.jpg"
        },
    ];
    
    async getProduct(page:number, limit:number) {
        const start = (page - 1)*limit;
        const end = start + limit;
        
        return this.products.slice(start, end);
    }
    
    async getProductById(id: number) {
        return this.products.find((product) => product.id === id);
    }
    
    async createProduct(product:Product ) {
        const id = this.products.length + 1; 
        this.products = [... this.products, {id, ...product}]
        return {id, ...product};
    }
    
    async updateProduct(id: number, product: any) {
        const oldProduct = this.products.find((product) => product.id === id);
        const updatedProduct = {...oldProduct, ...product};
        return updatedProduct;
    }

    async deleteProduct(id: number) {
        this.products = this.products.filter((product) => product.id !== id);
        return `El producto con id:${id} ha sido eliminado`
    }
}