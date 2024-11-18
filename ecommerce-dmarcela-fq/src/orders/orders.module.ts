import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/products.entity';
import { Category } from 'src/entities/categories.entity';
import { User } from 'src/entities/users.entity';
import { Order } from 'src/entities/orders.entity';
import { OrderDetail } from 'src/entities/orderDetails.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    TypeOrmModule.forFeature([Category]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Order]),
    TypeOrmModule.forFeature([OrderDetail])
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
