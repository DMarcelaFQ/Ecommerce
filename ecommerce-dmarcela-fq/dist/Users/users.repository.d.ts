export declare class UsersRepository {
    private users;
    getUsers(page: number, limit: number): Promise<any>;
    getUserById(id: number): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    }>;
    createUser(user: any): Promise<any>;
    updateUser(id: number, user: any): Promise<any>;
    deleteUser(id: number): Promise<string>;
    login(userLogin: any): Promise<{
        message: string;
        userId: number;
        email: string;
    }>;
}
