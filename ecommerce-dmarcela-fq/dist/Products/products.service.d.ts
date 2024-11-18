import { Product } from "src/entities/products.entity";
import { Repository } from "typeorm";
import { Category } from "src/entities/categories.entity";
export declare class ProductsService {
    private productsRepository;
    private categoriesRepository;
    constructor(productsRepository: Repository<Product>, categoriesRepository: Repository<Category>);
    addProducts(): Promise<string>;
    getProducts(page: number, limit: number): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
    createProduct(product: Product): Promise<Product>;
    updateProduct(id: string, product: Partial<Product>): Promise<Product>;
    deleteProduct(id: string): Promise<{
        message: string;
    }>;
}
