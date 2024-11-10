"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
let UsersRepository = class UsersRepository {
    constructor() {
        this.users = [
            {
                id: 1,
                email: "amapola@gmail.com",
                name: "Amapola Franco",
                password: "AmiTheBestMichi",
                address: "Cra 24 Miau",
                phone: "123456",
                country: "Colombia",
                city: "Cali",
            },
            {
                id: 2,
                email: "Shou@gmail.com",
                name: "Shou Franco",
                password: "ShucitoTheBestMichi",
                address: "Cra 24 Miau",
                phone: "123456",
                country: "Colombia",
                city: "Cali",
            },
            {
                id: 3,
                email: "iris@gmail.com",
                name: "Iris Franco",
                password: "MiñiTheBestMichi",
                address: "Cra 24 Miau",
                phone: "123456",
                country: "Colombia",
                city: "Cali",
            },
        ];
    }
    async getUsers(page, limit) {
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedUsers = this.users.slice(start, end);
        return paginatedUsers.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            phone: user.phone,
            country: user.country,
            city: user.city
        }));
    }
    async getUserById(id) {
        return this.users.find((user) => user.id === id);
    }
    async createUser(user) {
        const id = this.users.length + 1;
        this.users = [...this.users, { id, ...user }];
        return { id, ...user };
    }
    async updateUser(id, user) {
        const oldUser = this.users.find((user) => user.id === id);
        const updatedUser = { ...oldUser, ...user };
        return updatedUser;
    }
    async deleteUser(id) {
        this.users = this.users.filter((user) => user.id !== id);
        return `El usuario con id:${id} ha sido eliminado`;
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)()
], UsersRepository);
//# sourceMappingURL=users.repository.js.map