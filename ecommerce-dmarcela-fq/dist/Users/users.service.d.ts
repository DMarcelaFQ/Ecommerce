import { User } from "src/entities/users.entity";
import { Repository } from "typeorm";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getUsers(page: number, limit: number): Promise<Partial<User[]>>;
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
    updateUser(id: string, user: Partial<User>): Promise<{
        message: string;
    }>;
    deleteUser(id: string): Promise<{
        message: string;
    }>;
}
