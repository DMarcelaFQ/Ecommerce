export declare class CreateUserDto {
    email: string;
    name: string;
    password: string;
    address: string;
    phone: number;
    country: string;
    city: string;
}
export declare class loginUserDto extends CreateUserDto {
    'email': any;
    'password': any;
}
