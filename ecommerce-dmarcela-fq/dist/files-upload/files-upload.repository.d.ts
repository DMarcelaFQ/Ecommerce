import { UploadApiResponse } from "cloudinary";
export declare class FilesUploadRepository {
    uploadImage(file: Express.Multer.File): Promise<UploadApiResponse>;
}
