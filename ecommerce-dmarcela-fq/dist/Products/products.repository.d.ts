export declare class ProductsRepository {
    private products;
    getProduct(): Promise<{
        id: number;
        name: string;
        deescription: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }[]>;
}
