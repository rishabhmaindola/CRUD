import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [];

    createUser(user: CreateUserDto) {
        this.users.push({ id: Date.now().toString(), ...user });
        return { message: 'User created successfully', user };
    }

    findAll() {
        return this.users;
    }

    findOne(id: string) {
        const user = this.users.find(user => user.id === id);
        return user || { message: 'User not found' };
    }

    updateUser(id: string, updateUserDto: UpdateUserDto) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return { message: 'User not found' };
        }
        this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
        return { message: 'User updated successfully', user: this.users[userIndex] };
    }


    deleteUser(id: string) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return { message: 'User not found' };
        }
        const deletedUser = this.users.splice(userIndex, 1);
        return { message: 'User deleted successfully', user: deletedUser };
    }
}
