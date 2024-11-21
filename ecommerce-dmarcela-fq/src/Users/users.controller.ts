import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthGuard } from "src/Auth/guards/auth.guard";
import { CreateUserDto } from "src/dto/CreateUser.dto";


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
    getUserById(@Param('id', ParseUUIDPipe) id: string) {
        return this.usersService.getUserById(id);
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    updateUser(@Param('id', ParseUUIDPipe) id:string, @Body() user: Partial<CreateUserDto>){
        return this.usersService.updateUser(id, user)
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    deleteUser(@Param('id', ParseUUIDPipe) id:string){
        return this.usersService.deleteUser(id)
    }
}