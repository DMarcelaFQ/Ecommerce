import { Body, Controller, Get, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from 'src/dto/CreateOrder.dto';
import { AuthGuard } from 'src/Auth/guards/auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  
  @Post()
  @UseGuards(AuthGuard)
  addOrder(@Body() addOrder: CreateOrderDto) {
    const {userId, products} = addOrder;
    return this.ordersService.addOrder(userId, products)
  }
  @Get(':id')
  @UseGuards(AuthGuard)
  getOrderById(@Param('id', ParseUUIDPipe) id: string) {
    return this.ordersService.getOrderById(id)
  }
}
