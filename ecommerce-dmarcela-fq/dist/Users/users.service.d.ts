import { UsersRepository } from "./users.repository";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    }[]>;
}
