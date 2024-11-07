import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<{
        id: number;
        name: string;
        deescription: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }[]>;
}
