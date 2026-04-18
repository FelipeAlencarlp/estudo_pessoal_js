import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./interfaces/user.interface";

let users = [
    { id: 1, name: 'Felipe' },
    { id: 2, name: 'Ana' },
    { id: 3, name: 'João' },
    { id: 4, name: 'Carlos' }
];

@Injectable()
export class UsersService {
    private users: User[] = users;

    create(createUserDto: CreateUserDto) {
        const newUser = {
            id: Date.now(),
            ...createUserDto,
        };

        this.users.push(newUser);
        return newUser;
    }

    findAll(): User[] {
        return this.users;
    }
}
