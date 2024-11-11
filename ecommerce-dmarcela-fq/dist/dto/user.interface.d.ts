export interface User {
    email: string;
    name: string;
    password: string;
    address: string;
    phone: string;
    country: string;
    city: string;
}
export interface UserDto {
    id: number;
    email: string;
    name: string;
    address: string;
    phone: string;
    country: string;
    city: string;
}
export interface UserLoginDto {
    email: string;
    password: string;
}
