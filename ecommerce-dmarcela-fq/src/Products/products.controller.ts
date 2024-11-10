import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./product.interface";
import { AuthGuard } from "src/Auth/guards/auth.guard";

@Controller ('products')
export class ProductsController {
    constructor( private readonly productsService: ProductsService) {}

    @Get()
    getProducts(@Query('page') page:string, @Query('limit') limit:string) {
        if(page && limit){
            return this.productsService.getProducts(Number(page), Number(limit))
        }
        return this.productsService.getProducts(1,5);
    }

    @Get(':id')
    getProductById(@Param('id') id:string) {
        return this.productsService.getProductById(Number(id));
    }

    @HttpCode(201)
    @Post()
    @UseGuards(AuthGuard)
    createProduct(@Body() product: Product){
        return this.productsService.createProduct(product);
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    updateProduct(@Param('id') id:string, @Body() product: any){
        return this.productsService.updateProduct(Number(id), product)
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    deleteProduct(@Param('id') id:string){
        return this.productsService.deleteProduct(Number(id));
    }
}