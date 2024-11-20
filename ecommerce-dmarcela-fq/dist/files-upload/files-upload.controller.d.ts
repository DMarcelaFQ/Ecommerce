import { FilesUploadService } from './files-upload.service';
export declare class FilesUploadController {
    private readonly filesUploadService;
    constructor(filesUploadService: FilesUploadService);
    uploadImage(productId: string, file: Express.Multer.File): Promise<{
        message: string;
        productUpdated: import("../entities/products.entity").Product;
    }>;
}
