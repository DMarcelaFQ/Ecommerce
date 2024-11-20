import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserLoginDto } from "src/dto/user.interface";
import { User } from "src/entities/users.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}

    async login(userLogin: UserLoginDto) {
        const user = await this.usersRepository.findOne({ where: { email: userLogin.email } });
        if (!user) {
            throw new NotFoundException(`No se puede iniciar sesion. Email o password incorrectos`);
        }

        const passwordMatch = await bcrypt.compare(userLogin.password, user.password);
        if (!passwordMatch) {
            throw new NotFoundException(`No se puede iniciar sesion. Email o password incorrectos`);
        }
        return {
            message: "Usuario loggeado con éxito",
            user: user.id
        }
    }
}