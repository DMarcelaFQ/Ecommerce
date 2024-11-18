import { Body, Controller, Delete, Get, HttpCode, Param, ParseUUIDPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { AuthGuard } from "src/Auth/guards/auth.guard";
import { Product } from "src/entities/products.entity";

@Controller ('products')
export class ProductsController {
    constructor( private readonly productsService: ProductsService) {}

    @Get('seeder')
    addProducts() {
        return this.productsService.addProducts()
    }

    @Get()
    getProducts(@Query('page') page:string, @Query('limit') limit:string) {
        if(page && limit){
            return this.productsService.getProducts(Number(page), Number(limit))
        }
        return this.productsService.getProducts(1,5);
    }


    @Get(':id')
    getProductById(@Param('id', ParseUUIDPipe) id:string) {
        return this.productsService.getProductById(id);
    }

    @HttpCode(201)
    @Post()
    @UseGuards(AuthGuard)
    createProduct(@Body() product: Product){
        return this.productsService.createProduct(product);
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    updateProduct(@Param('id', ParseUUIDPipe) id:string, @Body() product: any){
        return this.productsService.updateProduct(id, product)
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    deleteProduct(@Param('id', ParseUUIDPipe) id:string){
        return this.productsService.deleteProduct(id);
    }
}