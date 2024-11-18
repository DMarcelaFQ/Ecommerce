import { OrdersService } from './orders.service';
import { CreateOrderDto } from 'src/dto/CreateOrder.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    addOrder(addOrder: CreateOrderDto): Promise<import("../entities/orders.entity").Order>;
    getOrderById(id: string): Promise<{
        id: string;
        date: Date;
        user: import("../entities/users.entity").User;
        totalPrice: number;
        products: import("../entities/products.entity").Product[];
    }>;
}
