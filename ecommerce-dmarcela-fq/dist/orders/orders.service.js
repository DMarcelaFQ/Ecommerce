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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const orderDetails_entity_1 = require("../entities/orderDetails.entity");
const orders_entity_1 = require("../entities/orders.entity");
const products_entity_1 = require("../entities/products.entity");
const users_entity_1 = require("../entities/users.entity");
const typeorm_2 = require("typeorm");
let OrdersService = class OrdersService {
    constructor(usersRepository, orderRepository, orderDetailsRepository, productsRepository) {
        this.usersRepository = usersRepository;
        this.orderRepository = orderRepository;
        this.orderDetailsRepository = orderDetailsRepository;
        this.productsRepository = productsRepository;
    }
    async addOrder(userId, products) {
        const user = await this.usersRepository.findOneBy({ id: userId });
        if (!user) {
            throw new common_1.NotFoundException(`Usuario con ID ${userId} no encontrado`);
        }
        let totalPrice = 0;
        const order = new orders_entity_1.Order();
        order.date = new Date();
        order.user = user;
        const newOrder = await this.orderRepository.save(order);
        const productsOrder = await Promise.all(products.map(async (element) => {
            const product = await this.productsRepository.findOne({
                where: { id: element.id, stock: (0, typeorm_2.MoreThanOrEqual)(1) }
            });
            if (!product) {
                throw new common_1.BadRequestException(`Producto con ID ${element.id} sin stock.`);
            }
            totalPrice += Number(product.price);
            await this.productsRepository.update({ id: element.id }, { stock: product.stock - 1 });
            return product;
        }));
        const orderDetail = new orderDetails_entity_1.OrderDetail();
        orderDetail.order = newOrder;
        orderDetail.price = Number(totalPrice.toFixed(2));
        orderDetail.products = productsOrder;
        newOrder.orderDetail = orderDetail;
        await this.orderRepository.save(newOrder);
        await this.orderDetailsRepository.save(orderDetail);
        return await this.orderRepository.findOne({
            where: { id: newOrder.id },
            relations: {
                orderDetail: {
                    products: true
                }
            }
        });
    }
    async getOrderById(id) {
        const order = await this.orderRepository.findOne({
            where: { id: id },
            relations: {
                orderDetail: {
                    products: true,
                },
            },
        });
        if (!order) {
            throw new common_1.NotFoundException(`Orden con ID ${id} no encontrada.`);
        }
        const orderFound = {
            id: order.id,
            date: order.date,
            user: order.user,
            totalPrice: order.orderDetail.price,
            products: order.orderDetail.products
        };
        return orderFound;
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(orders_entity_1.Order)),
    __param(2, (0, typeorm_1.InjectRepository)(orderDetails_entity_1.OrderDetail)),
    __param(3, (0, typeorm_1.InjectRepository)(products_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrdersService);
//# sourceMappingURL=orders.service.js.map