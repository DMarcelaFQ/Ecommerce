export declare class UsersRepository {
    private users;
    getUser(): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    }[]>;
}
