import { Controller, FileTypeValidator, MaxFileSizeValidator, Param, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesUploadService } from './files-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FilesUploadController {
  constructor(private readonly filesUploadService: FilesUploadService) {}

  @Post('uploadImage/:productId')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @Param('productId') productId:string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 200000,
            message: `El tamaño del archivo no debe superar los 200 KB`
          }),
          new FileTypeValidator({
            fileType: /(jpeg|png|gif|bmp|webp|svg\+xml)$/
          })
        ],
      }),
    )
    file: Express.Multer.File,
  ){
    return this.filesUploadService.uploadProductImage(file, productId);
  }
}
