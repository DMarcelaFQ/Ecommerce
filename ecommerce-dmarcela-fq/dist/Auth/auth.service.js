"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../entities/users.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async createUser(user) {
        const existingUser = await this.usersRepository.findOne({ where: { email: user.email } });
        if (existingUser) {
            throw new common_1.ConflictException(`El correo ${user.email} ya está registrado.`);
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        const newUser = this.usersRepository.create({
            ...user,
            password: hashedPassword,
        });
        const savedUser = await this.usersRepository.save(newUser);
        const { password, isAdmin, ...userWithoutPassword } = savedUser;
        return {
            message: "Usuario creado con éxito",
            user: userWithoutPassword,
        };
    }
    async login(userLogin) {
        const user = await this.usersRepository.findOne({ where: { email: userLogin.email } });
        if (!user) {
            throw new common_1.NotFoundException(`No se puede iniciar sesion. Email o password incorrectos`);
        }
        const passwordMatch = await bcrypt.compare(userLogin.password, user.password);
        if (!passwordMatch) {
            throw new common_1.NotFoundException(`No se puede iniciar sesion. Email o password incorrectos`);
        }
        const userPayload = {
            sub: user.id,
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin
        };
        const token = this.jwtService.sign(userPayload);
        return {
            message: "Usuario loggeado con éxito",
            user: user.id,
            token,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map