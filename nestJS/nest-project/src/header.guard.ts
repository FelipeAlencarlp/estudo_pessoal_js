import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable()
export class HeaderGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Obtem o objeto de requisição (Request)
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenHeader(request);

    if (!token) {
      throw new UnauthorizedException('Token não fornecido');
    }

    const userToken = this.authService.validateFakeToken(token);

    if (!userToken) {
      throw new UnauthorizedException('Token inválido ou expirado.');
    }

    // Anexa o usuário à requisição
    request.user = userToken;
    return true;
  }

  // Função para extrair o token da requisição
  private extractTokenHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}