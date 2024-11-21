import { PickType } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsString, Matches, MaxLength, MinLength, minLength, Validate,  } from 'class-validator'
import { MatchPassword } from 'src/decorators/matchPassword.decorator';

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    name: string;

    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/, {
        message: 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales: !@#$%^&*'
    })
    @MinLength(8)
    // @MaxLength(15)
    password: string;

    @IsNotEmpty()
    @Validate(MatchPassword, ['password'])
    confirmPassword: string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    address: string;

    @IsNotEmpty()
    @IsInt()
    phone: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    country: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    city: string;
}

export class loginUserDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;
}
