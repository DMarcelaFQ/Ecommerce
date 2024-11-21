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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../entities/users.entity");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getUsers(page, limit) {
        const start = (page - 1) * limit;
        const users = await this.usersRepository.find({
            skip: start,
            take: limit,
            select: ['id', 'name', 'email', 'address', 'phone', 'country', 'city', 'isAdmin'],
        });
        if (users.length === 0) {
            throw new common_1.NotFoundException('No se encontraron usuarios en la base de datos.');
        }
        ;
        return users;
    }
    async getUserById(id) {
        const userFound = await this.usersRepository.findOne({
            where: { id: id },
            relations: ['orders'],
            select: ['id', 'name', 'email', 'address', 'phone', 'country', 'city'],
        });
        if (!userFound) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado.`);
        }
        return {
            ...userFound,
            orders: userFound.orders.map(order => ({
                id: order.id,
                date: order.date
            })),
        };
    }
    async updateUser(id, user) {
        const userUpdate = await this.usersRepository.findOneBy({ id });
        if (!userUpdate) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado.`);
        }
        Object.assign(userUpdate, user);
        await this.usersRepository.save(userUpdate);
        return {
            message: `El usuario con ID ${id} ha sido modificado con exito`
        };
    }
    async deleteUser(id) {
        const userFound = await this.usersRepository.findOneBy({ id });
        if (!userFound) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado.`);
        }
        await this.usersRepository.remove(userFound);
        return {
            message: `El usuario con ID ${id} ha sido eliminado.`
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map