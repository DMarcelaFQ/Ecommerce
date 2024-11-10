import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const dateTime = new Date().toLocaleString()
        res.on('finish', () => {
            console.log(
                `[${dateTime}]: Estas ejecutando un metodo ${req.method} en la ruta ${req.url} STATUS: ${res.statusCode}`,
            );
        });
        next();
    }
}