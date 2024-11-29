import { PickType } from '@nestjs/swagger';
import { IsEmail, IsEmpty, IsInt, IsNotEmpty, IsString, Matches, MaxLength, MinLength, minLength, Validate,  } from 'class-validator'
import { MatchPassword } from 'src/decorators/matchPassword.decorator';

export class CreateUserDto {
    
    /**
     * @description Esta propiedad debe contener obligatoriamente un email y no puede omitirse
     * @example shoucito@gmail.com
     */
    
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    /**
     * @description Esta propiedad debe contener obligatoriamente un string y no puede omitirse
     * @example Shoucito F
     */
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    name: string;

    /**
     * @description La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales: !@#$%^&*. Este campo es obligatorio
     * @example Shouthebestcat2!
     */
    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/, {
        message: 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales: !@#$%^&*'
    })
    @MinLength(8)
    // @MaxLength(15)
    password: string;

    /**
     * @description Aqui confirme la contraseña introducida en el campo anterior. Este campo es obligatorio
     * @example Shouthebestcat2!
     */
    @IsNotEmpty()
    @Validate(MatchPassword, ['password'])
    confirmPassword: string;

    /**
     * @description Este campo es un String. Este campo es obligatorio
     * @example Cra 24 Miau
     */
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    address: string;

    /**
     * @description Este campo es un Numero. Este campo es obligatorio
     * @example 1234567
     */
    @IsNotEmpty()
    @IsInt()
    phone: number;

    /**
     * @description Este campo es un String. Este campo es obligatorio
     * @example Colombia
     */
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    country: string;

    /**
     * @description Este campo es un String. Este campo es obligatorio
     * @example Palmira
     */
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    city: string;

    @IsNotEmpty()
    @IsString()
    birthdate:string;

    /**
     * @description Este campo no debe enviarse en la solicitud (Eliminar). Esta definidio por el administrador de la base de datos.
     */
    @IsEmpty()
    isAdmin?: boolean;
}

export class loginUserDto {
    /**
     * @description Esta propiedad debe contener obligatoriamente un email y no puede omitirse
     * @example aslan@gmail.com
     */
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    /**
     * @description La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y uno de los siguientes caracteres especiales: !@#$%^&*. Este campo es obligatorio
     * @example AslitanTheBestMichi2!
     */
    @IsNotEmpty()
    @MinLength(8)
    password: string;
}
