import {
    IsEmail, IsNotEmpty, IsNumber, IsString, MinLength, IsPositive
} from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(3, { message: 'O nome precisa ter 3 ou mais caracteres.' })
    @IsNotEmpty({ message: 'O nome é obrigatório.' })
    readonly nome!: string;

    @IsEmail({}, { message: 'E-mail inválido.' })
    @IsNotEmpty({ message: 'O e-mail é obrigatório.' })
    readonly email!: string;

    @IsNumber()
    @IsPositive({ message: 'A idade precisa ser maior que 0.' })
    readonly idade!: number;
}