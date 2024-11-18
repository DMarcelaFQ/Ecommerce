import { ProductsService } from "./products.service";
import { Product } from "src/entities/products.entity";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProducts(): Promise<string>;
    getProducts(page: string, limit: string): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
    createProduct(product: Product): Promise<Product>;
    updateProduct(id: string, product: any): Promise<Product>;
    deleteProduct(id: string): Promise<{
        message: string;
    }>;
}
