import { AuthService } from "./auth.service";
import { loginUserDto } from "src/dto/CreateUser.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(userLogin: loginUserDto): Promise<{
        message: string;
        userId: number;
        email: string;
    }>;
}
