import { Order } from "./orders.entity";
export declare class User {
    id: string;
    email: string;
    name: string;
    password: string;
    address: string;
    phone: number;
    birthdate: Date;
    country: string;
    city: string;
    isAdmin: boolean;
    orders: Order[];
}
