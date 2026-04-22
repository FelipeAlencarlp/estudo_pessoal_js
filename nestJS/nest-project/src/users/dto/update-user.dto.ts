import {
    IsEmail, IsNotEmpty, IsNumber, IsString, MinLength, IsPositive
} from "class-validator";

export class UpdateUserDto {
    @IsString()
    @MinLength(3, { message: 'O nome precisa ter 3 ou mais caracteres.' })
    @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
    readonly nome!: string;

    @IsEmail({}, { message: 'E-mail inválido.' })
    @IsNotEmpty({ message: 'O e-mail não pode ser vazio.' })
    readonly email!: string;

    @IsNumber()
    @IsPositive({ message: 'A idade precisa ser maior que 0.' })
    @IsNotEmpty({ message: 'A idade não pode ser vazia.' })
    readonly idade!: number;

    @MinLength(4, { message: 'A senha precisa ter pelo menos 4 caracteres.' })
    @IsNotEmpty({ message: 'A senha não pode ser vazia.' })
    readonly senha!: string;
}