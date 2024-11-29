import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthGuard } from "src/Auth/guards/auth.guard";
import { CreateUserDto } from "src/dto/CreateUser.dto";
import { Roles } from "src/decorators/roles.decorator";
import { Role } from "src/roles.enum";
import { RolesGuard } from "src/Auth/guards/roles.guard";
import { ApiBearerAuth } from "@nestjs/swagger";


@Controller('users')
export class UsersController {
    constructor( private readonly usersService: UsersService) {}

    @ApiBearerAuth()
    @Get()
    @Roles(Role.ADMIN)
    @UseGuards(AuthGuard, RolesGuard)
    getUsers(@Query('page') page:string, @Query('limit') limit:string) {
        if(page && limit){
            return this.usersService.getUsers(Number(page), Number(limit))
        }
        return this.usersService.getUsers(1, 5);
    }

    @ApiBearerAuth()
    @Get(':id')
    @UseGuards(AuthGuard)
    getUserById(@Param('id', ParseUUIDPipe) id: string) {
        return this.usersService.getUserById(id);
    }

    @ApiBearerAuth()
    @Put(':id')
    @UseGuards(AuthGuard)
    updateUser(@Param('id', ParseUUIDPipe) id:string, @Body() user: any){
        return this.usersService.updateUser(id, user)
    }

    @ApiBearerAuth()
    @Delete(':id')
    @UseGuards(AuthGuard)
    deleteUser(@Param('id', ParseUUIDPipe) id:string){
        return this.usersService.deleteUser(id)
    }
}