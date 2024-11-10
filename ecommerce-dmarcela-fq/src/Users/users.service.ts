import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { User } from "../Auth/dto/user.interface";

@Injectable()
export class UsersService {
    
    constructor(private usersRepository: UsersRepository) {}
    
    getUsers(page:number, limit:number) {
        return this.usersRepository.getUsers(page, limit);
    }
    
    getUserById(id: number) {
        return this.usersRepository.getUserById(id);
    }
    
    createUser(user: User): Promise<User> {
        return this.usersRepository.createUser(user);
    }

    updateUser(id: number, user: any) {
        return this.usersRepository.updateUser(id, user);
    }

    deleteUser(id: number) {
        return this.usersRepository.deleteUser(id);
    }
}