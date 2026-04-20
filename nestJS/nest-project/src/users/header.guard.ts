import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // 1. Obter o objeto de requisição (Request)
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenHeader(request);

    if (!token) {
        throw new UnauthorizedException();
    }

    return true;
  }

  // Função para extrair o token da requisição
  private extractTokenHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}