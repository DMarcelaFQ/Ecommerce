import { User } from "src/entities/users.entity";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private usersRepository;
    private readonly jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    createUser(user: Partial<User>): Promise<{
        message: string;
        user: Partial<User>;
    }>;
    login(userLogin: Partial<User>): Promise<{
        message: string;
        user: string;
        token: string;
    }>;
}
