import { UserLoginDto } from "src/dto/user.interface";
import { User } from "src/entities/users.entity";
import { Repository } from "typeorm";
export declare class AuthService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    login(userLogin: UserLoginDto): Promise<{
        message: string;
        user: string;
    }>;
}
