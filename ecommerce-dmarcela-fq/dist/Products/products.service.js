"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const data = require("../assets/data.json");
const typeorm_1 = require("@nestjs/typeorm");
const products_entity_1 = require("../entities/products.entity");
const typeorm_2 = require("typeorm");
const categories_entity_1 = require("../entities/categories.entity");
let ProductsService = class ProductsService {
    constructor(productsRepository, categoriesRepository) {
        this.productsRepository = productsRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async addProducts() {
        const categories = await this.categoriesRepository.find();
        data?.map(async (element) => {
            const category = categories.find((category) => category.name === element.category);
            const product = new products_entity_1.Product();
            product.name = element.name;
            product.description = element.description;
            product.price = element.price;
            product.stock = element.stock;
            product.category = category;
            await this.productsRepository
                .createQueryBuilder()
                .insert()
                .into(products_entity_1.Product)
                .values(product)
                .orUpdate(['description', 'price', 'stock'], ['name'])
                .execute();
        });
        return "Products added";
    }
    async getProducts(page, limit) {
        const start = (page - 1) * limit;
        return await this.productsRepository.find({ skip: start, take: limit });
    }
    async getProductById(id) {
        const product = await this.productsRepository.findOne({
            where: { id: id }
        });
        if (!product) {
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado.`);
        }
        return product;
    }
    async createProduct(product) {
        const newProduct = this.productsRepository.create(product);
        return await this.productsRepository.save(newProduct);
    }
    async updateProduct(id, product) {
        const productUpdate = await this.productsRepository.findOneBy({ id });
        if (!productUpdate) {
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado.`);
        }
        Object.assign(productUpdate, product);
        return await this.productsRepository.save(productUpdate);
    }
    async deleteProduct(id) {
        const product = await this.productsRepository.findOneBy({ id });
        if (!product) {
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado.`);
        }
        await this.productsRepository.remove(product);
        return { message: `Producto con ID ${id} eliminado correctamente.` };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(categories_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map