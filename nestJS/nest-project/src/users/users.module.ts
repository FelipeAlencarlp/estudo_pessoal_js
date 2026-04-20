import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TransformInterceptor } from './transform.interceptor';

@Module({
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}
