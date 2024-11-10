import { UsersService } from "./users.service";
import { User } from "../Auth/dto/user.interface";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(page: string, limit: string): Promise<import("../Auth/dto/user.interface").UserDto[]>;
    getUserById(id: string): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    }>;
    createUser(user: User): Promise<User>;
    updateUser(id: string, user: any): Promise<any>;
    deleteUser(id: string): Promise<string>;
}
