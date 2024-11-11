import { Injectable } from "@nestjs/common";
import { UserLoginDto } from "src/dto/user.interface";
import { UsersRepository } from "src/Users/users.repository";

@Injectable()
export class AuthService {
    constructor(private readonly usersRepository: UsersRepository) {}

    login(userLogin: UserLoginDto) {
        return this.usersRepository.login(userLogin);
    }
}