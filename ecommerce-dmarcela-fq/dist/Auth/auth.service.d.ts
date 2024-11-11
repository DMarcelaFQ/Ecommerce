import { UserLoginDto } from "src/dto/user.interface";
import { UsersRepository } from "src/Users/users.repository";
export declare class AuthService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    login(userLogin: UserLoginDto): Promise<{
        message: string;
        userId: number;
        email: string;
    }>;
}
