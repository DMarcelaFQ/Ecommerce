import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(page: string, limit: string): Promise<import("../entities/users.entity").User[]>;
    getUserById(id: string): Promise<{
        orders: {
            id: string;
            date: Date;
        }[];
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
    }>;
    updateUser(id: string, user: any): Promise<{
        message: string;
    }>;
    deleteUser(id: string): Promise<{
        message: string;
    }>;
}
