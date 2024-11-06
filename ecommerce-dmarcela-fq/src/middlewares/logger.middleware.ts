/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
    console.log(
        `Estas ejecutando un metodo ${req.method} en la ruta ${req.url}`,
    );
    next();
    }
}

export function loggerGlobal(req: Request, res: Response, next: NextFunction) {
    const dateTime = new Date().toLocaleString()
    console.log(
        `[${dateTime}]: Estas ejecutando un metodo ${req.method} en la ruta ${req.url}`,
    );
    next();
}