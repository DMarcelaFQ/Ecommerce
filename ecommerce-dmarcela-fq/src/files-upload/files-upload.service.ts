import { Injectable, NotFoundException } from '@nestjs/common';
import { FilesUploadRepository } from './files-upload.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/entities/products.entity';

@Injectable()
export class FilesUploadService {
    constructor(
        private filesUploadRepository: FilesUploadRepository,
        @InjectRepository(Product)
        private productsRepository: Repository<Product>
    ) {}

    async uploadProductImage(file:Express.Multer.File, productId:string){
        const product = await this.productsRepository.findOne({
            where: { id: productId }
        });
        if (!product) {
            throw new NotFoundException(`Producto con ID ${productId} no encontrado.`);
        };
        
        const uploadImage = await this.filesUploadRepository.uploadImage(file);
        await this.productsRepository.update(
            product.id, 
            {imgUrl:uploadImage.secure_url}
        );

        const productUpdated = await this.productsRepository.findOneBy({id:productId});

        return { 
            message: `La imagen del producto con ID ${product.id} fue actualizada.`,
            productUpdated
        };
    }
}
