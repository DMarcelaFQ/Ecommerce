export declare class CreateUserDto {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    address: string;
    phone: number;
    country: string;
    city: string;
    isAdmin?: boolean;
}
export declare class loginUserDto {
    email: string;
    password: string;
}
