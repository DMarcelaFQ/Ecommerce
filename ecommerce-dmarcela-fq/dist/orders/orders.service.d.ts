import { OrderDetail } from 'src/entities/orderDetails.entity';
import { Order } from 'src/entities/orders.entity';
import { Product } from 'src/entities/products.entity';
import { User } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
export declare class OrdersService {
    private usersRepository;
    private orderRepository;
    private orderDetailsRepository;
    private productsRepository;
    constructor(usersRepository: Repository<User>, orderRepository: Repository<Order>, orderDetailsRepository: Repository<OrderDetail>, productsRepository: Repository<Product>);
    addOrder(userId: string, products: any): Promise<Order>;
    getOrderById(id: string): Promise<{
        id: string;
        date: Date;
        user: User;
        totalPrice: number;
        products: Product[];
    }>;
}
