import { ProductsService } from "./products.service";
import { Product } from "./product.interface";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(page: string, limit: string): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }[]>;
    getProductById(id: string): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }>;
    createProduct(product: Product): Promise<Product>;
    updateProduct(id: string, product: any): Promise<any>;
    deleteProduct(id: string): Promise<string>;
}
