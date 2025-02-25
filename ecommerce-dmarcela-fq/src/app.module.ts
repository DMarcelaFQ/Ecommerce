import { Module } from '@nestjs/common';
import { UsersModule } from './Users/users.module';
import { ProductsModule } from './Products/products.module';
import { AuthModule } from './Auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { FilesUploadModule } from './files-upload/files-upload.module';
import typeorm from './config/typeorm';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    UsersModule, 
    ProductsModule, 
    AuthModule,
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '1h'},
      secret: process.env.JWT_SECRET,
    }),
    ConfigModule.forRoot({
      isGlobal:true,
      load: [typeorm]
    }),
    
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('typeorm')
    }),
    
    CategoriesModule,
    
    OrdersModule,
    
    FilesUploadModule,

  ],

  controllers: [],
  providers: [],
})
export class AppModule {}

