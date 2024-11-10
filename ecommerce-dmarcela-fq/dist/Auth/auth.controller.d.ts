import { AuthService } from "./auth.service";
import { UserLoginDto } from "./dto/user.interface";
export declare class AuthController {
    private readonly authService;
    usersService: any;
    constructor(authService: AuthService);
    createUser(user: UserLoginDto): any;
}
