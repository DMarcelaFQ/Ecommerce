import { UsersService } from "./users.service";
import { CreateUserDto } from "src/dto/CreateUser.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(page: string, limit: string): Promise<any>;
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
    createUser(user: CreateUserDto): Promise<any>;
    updateUser(id: string, user: CreateUserDto): Promise<any>;
    deleteUser(id: string): Promise<string>;
}
