import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginDto {
    @IsEmail({}, { message: 'E-mail inválido' })
    @IsNotEmpty({ message: 'O e-mail é obrigatório' })
    readonly email!: string;

    @IsNotEmpty({ message: 'Preencha a senha' })
    readonly senha!: string;
}