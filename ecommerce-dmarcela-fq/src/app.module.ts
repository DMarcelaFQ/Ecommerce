import { Module } from '@nestjs/common';
import { UsersModule } from './Users/users.module';
import { ProductsModule } from './Products/products.module';
import { AuthModule } from './Auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';


@Module({
  imports: [
    UsersModule, 
    ProductsModule, 
    AuthModule,
    ConfigModule.forRoot({
      isGlobal:true,
      load: [typeorm]
    }),
    
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('typeorm')
    })
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}

