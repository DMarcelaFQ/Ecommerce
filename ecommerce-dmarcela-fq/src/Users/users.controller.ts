import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "../Auth/dto/user.interface";
import { AuthGuard } from "src/Auth/guards/auth.guard";

@Controller('users')
export class UsersController {
    constructor( private readonly usersService: UsersService) {}

    @Get()
    @UseGuards(AuthGuard)
    getUsers(@Query('page') page:string, @Query('limit') limit:string) {
        if(page && limit){
            return this.usersService.getUsers(Number(page), Number(limit))
        }
        return this.usersService.getUsers(1, 5);
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    getUserById(@Param('id') id: string) {
        return this.usersService.getUserById(Number(id));
    }

    @HttpCode(201)
    @Post()
    createUser(@Body() user:User){
        return this.usersService.createUser(user);
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    updateUser(@Param('id') id:string, @Body() user: any){
        return this.usersService.updateUser(Number(id), user)
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    deleteUser(@Param('id') id:string){
        return this.usersService.deleteUser(Number(id))
    }
}