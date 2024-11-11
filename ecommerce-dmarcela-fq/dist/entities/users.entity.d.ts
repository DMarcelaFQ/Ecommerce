import { Order } from "./orders.entity";
export declare class User {
    id: string;
    email: string;
    name: string;
    password: string;
    address: string;
    phone: string;
    country: string;
    city: string;
    orders: Order[];
}
