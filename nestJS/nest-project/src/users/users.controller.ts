import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    ParseIntPipe,
    UseGuards,
    UseInterceptors
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./interfaces/user.interface";
import { AuthGuard } from "../auth/auth.guard";
import { TransformInterceptor } from "../transform.interceptor";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('users')
@UseGuards(AuthGuard)
@UseInterceptors(TransformInterceptor)
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Patch(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto
    ) {
        return this.usersService.update(
            id,
            updateUserDto.nome,
            updateUserDto.email,
            updateUserDto.idade,
            updateUserDto.senha
        );
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id);
    }
}
