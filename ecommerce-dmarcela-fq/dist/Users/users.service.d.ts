import { UsersRepository } from "./users.repository";
import { User } from "../dto/user.interface";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(page: number, limit: number): Promise<import("../dto/user.interface").UserDto[]>;
    getUserById(id: number): Promise<{
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
    updateUser(id: number, user: any): Promise<any>;
    deleteUser(id: number): Promise<string>;
}
