import { User } from "./users.entity";
import { OrderDetail } from "./orderDetails.entity";
export declare class Order {
    id: string;
    user: User;
    date: Date;
    orderDetail: OrderDetail;
}
