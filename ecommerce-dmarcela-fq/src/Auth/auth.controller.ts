import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserLoginDto } from "../dto/user.interface";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor( private readonly authService: AuthService) {}

    @Post('login')
    login(@Body() userLogin:UserLoginDto){
        return this.authService.login(userLogin);
    }
}