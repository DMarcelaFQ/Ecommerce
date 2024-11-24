import { AuthService } from "./auth.service";
import { CreateUserDto, loginUserDto } from "src/dto/CreateUser.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(user: CreateUserDto): Promise<{
        message: string;
        user: Partial<import("../entities/users.entity").User>;
    }>;
    login(userLogin: loginUserDto): Promise<{
        message: string;
        user: string;
        token: string;
    }>;
}
