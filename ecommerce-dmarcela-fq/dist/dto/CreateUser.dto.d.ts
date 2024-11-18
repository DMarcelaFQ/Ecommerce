export declare class CreateUserDto {
    email: string;
    name: string;
    password: string;
    address: string;
    phone: number;
    country: string;
    city: string;
}
declare const loginUserDto_base: import("@nestjs/common").Type<Pick<CreateUserDto, "email" | "password">>;
export declare class loginUserDto extends loginUserDto_base {
}
export {};
