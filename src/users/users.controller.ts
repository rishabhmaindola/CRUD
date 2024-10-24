import { Controller, Get, Post, Param, Delete, Body, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    
    constructor(private readonly usersService:UsersService) {}

    @Post('/create')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto)
    }

    @Get('/all')
    findAll() {
        return this.usersService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    @Patch('/update/:id')
    updateUser(@Param('id') id:string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.updateUser(id,updateUserDto)
    }

    @Delete('/delete/:id')
    deleteUser(@Param('id') id: string) {
        return this.usersService.deleteUser(id)
    }

}
