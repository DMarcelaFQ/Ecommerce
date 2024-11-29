import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/users.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private readonly jwtService: JwtService,
    ) {}

    async createUser(user: Partial<User>): Promise<{message: string; user: Partial<User>}> {
        const existingUser = await this.usersRepository.findOne({ where: { email: user.email } });
        if (existingUser) {
            throw new ConflictException(`El correo ${user.email} ya está registrado.`);
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);

        const birthdate = new Date(user.birthdate);
        
        const newUser = this.usersRepository.create({
            ...user,
            birthdate: birthdate,
            password: hashedPassword,
        });
        const savedUser = await this.usersRepository.save(newUser);

        const { password, isAdmin, ...userWithoutPassword } = savedUser;

        return {
            message: "Usuario creado con éxito",
            user: userWithoutPassword,
        };
    }

    async login(userLogin: Partial<User>) {
        const user = await this.usersRepository.findOne({ where: { email: userLogin.email } });
        if (!user) {
            throw new NotFoundException(`No se puede iniciar sesion. Email o password incorrectos`);
        }

        const passwordMatch = await bcrypt.compare(userLogin.password, user.password);
        if (!passwordMatch) {
            throw new NotFoundException(`No se puede iniciar sesion. Email o password incorrectos`);
        }

        const userPayload = {
            sub: user.id,
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin
        }
        const token = this.jwtService.sign(userPayload)

        return {
            message: "Usuario loggeado con éxito",
            user: user.id,
            token,
        }
    }
}