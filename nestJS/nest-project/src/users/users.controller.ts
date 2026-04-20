import { Controller, Get, Post, Body, Param, ParseIntPipe, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./interfaces/user.interface";
import { HeaderGuard } from "./header.guard";

@Controller('users')
@UseGuards(HeaderGuard)
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        return {
            message: 'Usuário encontrado',
            data: this.usersService.findOne(id)
        };
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        this.usersService.create(createUserDto);
        
        return {
            message: 'Usuário criado com sucesso.',
            data: createUserDto
        };
    }
}
