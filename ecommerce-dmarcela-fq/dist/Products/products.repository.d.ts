import { Product } from "./product.interface";
export declare class ProductsRepository {
    private products;
    getProduct(page: number, limit: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }[]>;
    getProductById(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }>;
    createProduct(product: Product): Promise<{
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
        id: number;
    }>;
    updateProduct(id: number, product: any): Promise<any>;
    deleteProduct(id: number): Promise<string>;
}
