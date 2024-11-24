import { ArrayNotEmpty, IsArray, IsNotEmpty, IsUUID, ValidateNested } from 'class-validator'
import { Product } from 'src/entities/products.entity';

export class CreateOrderDto {

     /**
     * @description Este campo es un String. Este campo es obligatorio
     * @example d4243b2f-b40b-4f7c-9cf3-a701d7d1f819
     *  */
    @IsNotEmpty()
    @IsUUID()
    userId: string;

    /**
     * @description Este campo es arreglo de UUID. Este campo es obligatorio
     * @example {"id":"1231d21d-a295-4361-a1b0-41b7aab4099a"},{"id":"c3f62e49-4c23-4e62-b440-7b91ed9d0536"}
     */
    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    products: Partial<Product>
}