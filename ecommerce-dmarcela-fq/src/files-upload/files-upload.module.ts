import { Module } from '@nestjs/common';
import { FilesUploadService } from './files-upload.service';
import { FilesUploadController } from './files-upload.controller';
import { CloudinaryConfig } from 'src/config/cloudinary';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/products.entity';
import { FilesUploadRepository } from './files-upload.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product])
  ],
  controllers: [FilesUploadController],
  providers: [FilesUploadService, CloudinaryConfig, FilesUploadRepository],
})
export class FilesUploadModule {}
