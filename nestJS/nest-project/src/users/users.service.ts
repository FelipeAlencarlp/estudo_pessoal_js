import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./interfaces/user.interface";

let users = [
    { id: 1, nome: 'admin', email: 'admin@email.com', idade: 30, senha: '123456' },
    { id: 2, nome: 'Ana', email: 'ana@email.com', idade: 18, senha: '123456' },
];

@Injectable()
export class UsersService {
    private users: User[] = users;

    findAll(): User[] {
        return this.users;
    }

    findOne(id: number) {
        const user = users.find((user) => user.id === id);

        if (!user) {
            throw new NotFoundException(`Usuário com ID: ${id} não encontrado`);
        }

        return user;
    }

    findOneByEmail(email: string) {
        const user = users.find((user) => user.email === email);

        if (!user) {
            throw new NotFoundException(`Usuário com E-mail: ${email} não encontrado`);
        }

        return user;
    }

    create(createUserDto: CreateUserDto) {
        const newUser = {
            id: Date.now(),
            ...createUserDto,
        };

        this.users.push(newUser);
        return newUser;
    }

    update(
        id: number,
        nome: string,
        email: string,
        idade: number,
        senha: string
    ) {
        const user = this.findOne(id);

        if (!user) {
            throw new NotFoundException(`Usuário com ID: ${id} não encontrado`);
        }
        
        return this.users = this.users.map((user) =>
            user.id === id
                ? { ...user, nome, email, idade, senha }
                : user
        );
    }

    delete(id: number) {
        const user = this.findOne(id);

        if (!user) {
            throw new NotFoundException(`Usuário com ID: ${id} não encontrado`);
        }

        return this.users = this.users.filter((user) => user.id !== id);
    }
}
