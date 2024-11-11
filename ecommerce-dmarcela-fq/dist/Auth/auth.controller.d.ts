import { UserLoginDto } from "../dto/user.interface";
import { AuthService } from "./auth.service";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(userLogin: UserLoginDto): Promise<{
        message: string;
        userId: number;
        email: string;
    }>;
}
