import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from 'src/dto/CreateOrder.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  
  @Post()
  addOrder(@Body() addOrder: CreateOrderDto) {
    const {userId, products} = addOrder;
    return this.ordersService.addOrder(userId, products)
  }
  @Get(':id')
  getOrderById(@Param('id', ParseUUIDPipe) id: string) {
    return this.ordersService.getOrderById(id)
  }
}
