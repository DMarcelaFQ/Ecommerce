import { Injectable } from "@nestjs/common";
import { User, UserDto } from "../Auth/dto/user.interface";

@Injectable()
export class UsersRepository {
    
    private users = [
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
    
    async getUsers(page:number, limit:number): Promise<UserDto[]> {
        
        const start = (page - 1)*limit;
        const end = start + limit;
        
        const paginatedUsers = this.users.slice(start,end);
        
        return paginatedUsers.map(user=> ({
            id: user.id,
            name: user.name,
            email: user.email,
            address: user.address,
            phone: user.phone,
            country: user.country,
            city: user.city
        }));
    }
    
    async getUserById(id: number) {
        return this.users.find((user) => user.id === id);
    }
    
    async createUser(user: User) {
        const id = this.users.length + 1; 
        this.users = [... this.users, {id, ...user}]
        return {id, ...user};
    }

    async updateUser(id: number, user: any) {
        const oldUser = this.users.find((user) => user.id === id);
        const updatedUser = {...oldUser, ...user};
        return updatedUser;
    }
    
    async deleteUser(id: number) {
        this.users = this.users.filter((user) => user.id !== id);
        return `El usuario con id:${id} ha sido eliminado`
    }
}