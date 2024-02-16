import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from '@entities/User.entity';
import { UsersService } from '../services/users.service';
import { UserInput } from '../dto/users.input';



@Resolver(() => User)
export class UsersResolver {
    constructor(private userService: UsersService) { }

    @Mutation(() => User)
    createUser(@Args('createUserInput') createUserInput: UserInput){
        return this.userService.create(createUserInput);
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
