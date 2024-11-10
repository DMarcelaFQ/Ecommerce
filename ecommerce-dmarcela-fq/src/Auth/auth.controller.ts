import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserLoginDto } from "./dto/user.interface";

@Controller('auth')
export class AuthController {
    usersService: any;
    constructor( private readonly authService: AuthService) {}

    @Post()
    createUser(@Body() user:UserLoginDto){
        return this.usersService.createUser(user);
    }
}