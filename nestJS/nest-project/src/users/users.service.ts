import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./interfaces/user.interface";

let users = [
    { id: 1, nome: 'Felipe', email: 'felipe@email.com', idade: 30 },
    { id: 2, nome: 'Ana', email: 'ana@email.com', idade: 18 },
];

@Injectable()
export class UsersService {
    private users: User[] = users;

    findAll(): User[] {
        return this.users;
    }

    create(createUserDto: CreateUserDto) {
        const newUser = {
            id: Date.now(),
            ...createUserDto,
        };

        this.users.push(newUser);
        return newUser;
    }
}
