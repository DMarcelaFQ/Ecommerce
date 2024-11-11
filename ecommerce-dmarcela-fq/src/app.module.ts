import { Module } from '@nestjs/common';
import { UsersModule } from './Users/users.module';
import { ProductsModule } from './Products/products.module';
import { AuthModule } from './Auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Category } from './entities/categories.entity';
import { User } from './entities/users.entity';
import { Product } from './entities/products.entity';
import { Order } from './entities/orders.entity';
import { OrderDetail } from './entities/orderDetails.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: './.env.development',
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        database: configService.get('DB_NAME'),
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        entities: [User, Product, Order, OrderDetail, Category],
        synchronize: true,
        logging: true
      })
    }), 

    UsersModule, 
    ProductsModule, 
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

