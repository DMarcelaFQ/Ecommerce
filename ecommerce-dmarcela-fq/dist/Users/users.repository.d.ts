import { User, UserDto } from "../Auth/dto/user.interface";
export declare class UsersRepository {
    private users;
    getUsers(page: number, limit: number): Promise<UserDto[]>;
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
    createUser(user: User): Promise<{
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country: string;
        city: string;
        id: number;
    }>;
    updateUser(id: number, user: any): Promise<any>;
    deleteUser(id: number): Promise<string>;
}
