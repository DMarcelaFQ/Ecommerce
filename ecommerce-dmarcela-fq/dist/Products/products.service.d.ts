import { ProductsRepository } from "./products.repository";
import { Product } from "./product.interface";
export declare class ProductsService {
    private productsRepository;
    constructor(productsRepository: ProductsRepository);
    getProducts(page: number, limit: number): Promise<{
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
    createProduct(product: Product): Promise<Product>;
    updateProduct(id: number, product: any): Promise<any>;
    deleteProduct(id: number): Promise<string>;
}
