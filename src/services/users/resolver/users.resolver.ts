import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from '@entities/User.entity';
import { UsersService } from '../services/users.service';
import { AuthResponseInput } from '../dto/auth-response.input';
import {AuthInput } from '../dto/auth.input';



@Resolver(() => User)
export class UsersResolver {
    constructor(private userService: UsersService) { }

    @Mutation(() => AuthResponseInput)
    signUp(@Args('signUpInput') signUpInput: AuthInput){
        return this.userService.signUp(signUpInput)
    }


    @Query(() => [User], { name: 'user' })
    findAll() {
        return this.userService.findAll();
    }

    @Query(() => User, { name: 'usergetById' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.userService.findOne(id);
    }
}
