import { AuthService } from "./auth.service";
import { CreateUserDto, loginUserDto } from "src/dto/CreateUser.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    createUser(user: CreateUserDto): Promise<{
        message: string;
        userWithoutPassword: {
            id: string;
            email: string;
            name: string;
            address: string;
            phone: number;
            country: string;
            city: string;
            orders: import("../entities/orders.entity").Order[];
        };
    }>;
    login(userLogin: loginUserDto): Promise<{
        message: string;
        user: string;
        token: string;
    }>;
}
