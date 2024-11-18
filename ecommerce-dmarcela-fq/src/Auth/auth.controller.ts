import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { loginUserDto } from "src/dto/CreateUser.dto";

@Controller('auth')
export class AuthController {
    constructor( private readonly authService: AuthService) {}

    @Post('login')
    login(@Body() userLogin:loginUserDto){
        return this.authService.login(userLogin);
    }
}