"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
let ProductsRepository = class ProductsRepository {
    constructor() {
        this.products = [
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
    }
    async getProduct(page, limit) {
        const start = (page - 1) * limit;
        const end = start + limit;
        return this.products.slice(start, end);
    }
    async getProductById(id) {
        return this.products.find((product) => product.id === id);
    }
    async createProduct(product) {
        const id = this.products.length + 1;
        this.products = [...this.products, { id, ...product }];
        return { id, ...product };
    }
    async updateProduct(id, product) {
        const oldProduct = this.products.find((product) => product.id === id);
        const updatedProduct = { ...oldProduct, ...product };
        return updatedProduct;
    }
    async deleteProduct(id) {
        this.products = this.products.filter((product) => product.id !== id);
        return `El producto con id:${id} ha sido eliminado`;
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)()
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map