import { User } from "./users.entity";
import { OrderDetail } from "./orderDetails.entity";
export declare class Order {
    id: string;
    date: Date;
    user: User;
    orderDetail: OrderDetail;
}
