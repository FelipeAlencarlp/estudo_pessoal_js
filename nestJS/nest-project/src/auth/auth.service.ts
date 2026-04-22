import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async signIn(
        email: string,
        pass: string
    ): Promise<{ access_token: string }> {
        const user = this.usersService.findOneByEmail(email);
        
        if (!user) {
            throw new UnauthorizedException('Usuário não encontrado');
        }

        if (user?.senha !== pass) {
            throw new UnauthorizedException('Senha incorreta');
        }

        const payload = { sub: user.id, email: user.email };

        return { access_token: await this.jwtService.signAsync(payload) };
    }
}