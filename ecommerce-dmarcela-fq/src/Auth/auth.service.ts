/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    getAuth() {
        return "Get auth";
    }
}