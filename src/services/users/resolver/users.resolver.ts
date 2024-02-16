import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from '@entities/User.entity';
import { UsersService } from '../services/users.service';
import { UpdateUserInput, UserInput } from '../dto/users.input';
import { NotFoundException } from '@nestjs/common';



@Resolver(() => User)
export class UsersResolver {
    constructor(private userService: UsersService) { }

    @Mutation(() => User)
    createUser(@Args('createUserInput') createUserInput: UserInput) {
        return this.userService.create(createUserInput);
    }

    @Query(() => [User], { name: 'findAllUser' })
    findAll() {
        return this.userService.findAll();
    }

    @Query(() => User, { name: 'usergetById' })
    async findOne(@Args('id', { type: () => Int }) id: number) {
        return await this.userService.findOne(id);
    }

    @Mutation(() => User, { name: 'UpdateUser' })
    async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
        return await this.userService.update(updateUserInput.id, updateUserInput);
    }

    @Mutation(() => User, { name: 'RemoveUser'})
    async removeExample(@Args('id', { type: () => Int }) id: number) {
        return await this.userService.remove(id);
    }
}
