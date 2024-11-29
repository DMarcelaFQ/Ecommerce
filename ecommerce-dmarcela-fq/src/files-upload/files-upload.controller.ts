import { Controller, FileTypeValidator, MaxFileSizeValidator, Param, ParseFilePipe, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FilesUploadService } from './files-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/Auth/guards/auth.guard';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation } from '@nestjs/swagger';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/roles.enum';

@Controller('files')
export class FilesUploadController {
  constructor(private readonly filesUploadService: FilesUploadService) {}

  @ApiBearerAuth()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary', 
        },
      },
    },
  })
  @Post('uploadImage/:productId')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard)
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
