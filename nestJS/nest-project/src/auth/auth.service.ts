import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    // Simulação de cache ou banco de dados em memória
    private fakeTokens = new Map<string, any>();

    signIn(email: string, pass: string) {
        const user = this.usersService.findOneByEmail(email);
        
        if (!user) {
            throw new UnauthorizedException('Usuário não encontrado');
        }

        if (user?.senha !== pass) {
            throw new UnauthorizedException('Senha incorreta');
        }

        const token = `token-fake-${new Date().toISOString()}`; // token fake

        // Armazena os dados do usuário associados ao token
        this.fakeTokens.set(token, { userId: user.id, nome: user.nome });

        return { access_token: token };
    }

    validateFakeToken(token: string) {
        return this.fakeTokens.get(token);
    }
}