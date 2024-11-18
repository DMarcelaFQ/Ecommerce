import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetail } from 'src/entities/orderDetails.entity';
import { Order } from 'src/entities/orders.entity';
import { Product } from 'src/entities/products.entity';
import { User } from 'src/entities/users.entity';
import { MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class OrdersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
        @InjectRepository(OrderDetail)
        private orderDetailsRepository: Repository<OrderDetail>,
        @InjectRepository(Product)
        private productsRepository: Repository<Product>
    ) {}

    async addOrder(userId:string, products:any) {
        const user = await this.usersRepository.findOneBy({id:userId})
        if (!user) {
            throw new Error(`Usuario con ID ${userId} no encontrado`);
        }

        const order = new Order();
        order.date = new Date();
        order.user = user;
        const newOrder = await this.orderRepository.save(order);

        let totalPrice:number = 0;
        // const productsOrder = [];

        const productsOrder = await Promise.all(
            products.map(async (element: Product) => {
                const product = await this.productsRepository.findOne({where: {id: element.id, stock: MoreThanOrEqual(1) }});
                if (!product) {
                    throw new Error(`Producto con ID ${element.id} sin stock.`);
                }

                // product.stock -= 1;
                // await this.productsRepository.save(product);
                
                await this.productsRepository.update(
                    {id: element.id},
                    {stock: product.stock -1}
                )

                totalPrice += Number(element.price);
                // productsOrder.push(product);
                return product 
            }), // encontrar por id y stock, sumar precio y reducir el stock
        )

        const orderDetail = new OrderDetail();
        orderDetail.order = newOrder;
        orderDetail.price = Number(Number(totalPrice).toFixed(2));
        orderDetail.products = productsOrder;
        await this.orderDetailsRepository.save(orderDetail);

        return await this.orderRepository.findOne({
            where: {id:newOrder.id},
            relations:{
                orderDetail: {
                    products:true
                }
            }
        })

    }

    async getOrderById(id: string) {
        const order = await this.orderRepository.findOne({
            where: { id: id },
            relations: {
                orderDetail: {
                products: true,
                },
            },
            
        });

        if (!order) {
            throw new Error(`Orden con ID ${id} no encontrada.`);
        }

        const orderFound = {
            id: order.id,
            date: order.date,
            user: order.user,
            totalPrice: order.orderDetail.price,
            products: order.orderDetail.products
        }
        
        return orderFound;
    }
}
