import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/users.entity";
import { Repository } from "typeorm";


@Injectable()
export class UsersService {
    
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}
    
    async getUsers(page:number, limit:number): Promise<Partial<User[]>> {
        const start = (page - 1)*limit;
        
        const users = await this.usersRepository.find({
            skip: start, 
            take: limit,
            select: ['id', 'name', 'email', 'address', 'phone', 'country', 'city', 'isAdmin'],
        });
        if(users.length === 0) {
            throw new NotFoundException('No se encontraron usuarios en la base de datos.');
        };
        return users;
    }
    
    async getUserById(id: string) {
        const userFound = await this.usersRepository.findOne({
            where: { id: id },
            relations: ['orders'],
            select: ['id', 'name', 'email', 'address', 'phone', 'country', 'city'],
        });
        if (!userFound) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado.`);
        }
        return {
            ...userFound,
            orders: userFound.orders.map(order => ({
                id: order.id,
                date: order.date
            })),
        };
    }

    async updateUser(id: string, user: Partial<User>) {
        const userUpdate = await this.usersRepository.findOneBy({id});
        if (!userUpdate) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado.`);
        }
        Object.assign(userUpdate, user);
        await this.usersRepository.save(userUpdate)
        return {
            message: `El usuario con ID ${id} ha sido modificado con exito`
        }
    }

    async deleteUser(id: string) {
        const userFound = await this.usersRepository.findOneBy({id});
        if (!userFound) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado.`);
        }
        await this.usersRepository.remove(userFound);
        return{
            message: `El usuario con ID ${id} ha sido eliminado.`
        }
    }
}