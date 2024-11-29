import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto, loginUserDto } from "src/dto/CreateUser.dto";

@Controller('auth')
export class AuthController {
    constructor( private readonly authService: AuthService) {}

    @HttpCode(201)
    @Post('signup')
    createUser(@Body() user: CreateUserDto){
        const userWithDate = {
            ...user,
            birthdate: new Date(user.birthdate),
        };
        return this.authService.createUser(userWithDate);
    }

    @Post('login')
    login(@Body() userLogin:loginUserDto){
        return this.authService.login(userLogin);
    }
}