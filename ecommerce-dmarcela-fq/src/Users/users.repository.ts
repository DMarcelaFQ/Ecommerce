import { Injectable } from "@nestjs/common";

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

    async getUser() {
        return this.users;
    }
}