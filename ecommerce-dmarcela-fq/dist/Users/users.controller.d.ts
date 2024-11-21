import { UsersService } from "./users.service";
import { CreateUserDto } from "src/dto/CreateUser.dto";
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
        country: string;
        city: string;
        isAdmin: boolean;
    }>;
    updateUser(id: string, user: Partial<CreateUserDto>): Promise<{
        message: string;
    }>;
    deleteUser(id: string): Promise<{
        message: string;
    }>;
}
