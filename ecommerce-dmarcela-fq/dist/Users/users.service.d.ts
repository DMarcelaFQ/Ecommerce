import { UsersRepository } from "./users.repository";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(page: number, limit: number): Promise<any>;
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
    createUser(user: any): Promise<any>;
    updateUser(id: number, user: any): Promise<any>;
    deleteUser(id: number): Promise<string>;
}
