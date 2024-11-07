import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsRepository {
    private products = [
        {
            id: 1,
            name: "RascadorA",
            deescription: "black",
            price: 150000,
            stock: true,
            imgUrl: "www.blackrascador.jpg"
        },
        {
            id: 2,
            name: "RascadorB",
            deescription: "white",
            price: 150000,
            stock: true,
            imgUrl: "www.whiterascador.jpg"
        },
    ];

    async getProduct() {
        return this.products;
    }
}