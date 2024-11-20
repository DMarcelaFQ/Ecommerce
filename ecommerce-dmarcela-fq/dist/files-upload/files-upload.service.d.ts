import { FilesUploadRepository } from './files-upload.repository';
import { Repository } from 'typeorm';
import { Product } from 'src/entities/products.entity';
export declare class FilesUploadService {
    private filesUploadRepository;
    private productsRepository;
    constructor(filesUploadRepository: FilesUploadRepository, productsRepository: Repository<Product>);
    uploadProductImage(file: Express.Multer.File, productId: string): Promise<{
        message: string;
        productUpdated: Product;
    }>;
}
