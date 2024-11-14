import { ArrayNotEmpty, IsArray, IsNotEmpty, IsUUID, ValidateNested } from 'class-validator'
import { Product } from 'src/entities/products.entity';

export class CreateOrderDto {

    @IsNotEmpty()
    @IsUUID()
    userId: string;

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    products: Partial<Product>
}