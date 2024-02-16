import { Field, InputType } from "@nestjs/graphql";
import { User } from '@entities/User.entity';

@InputType()
export class AuthResponseInput{
    @Field()
    accessToken: string;

    @Field()
    refrshToken: string;

    @Field(() => User)
    user: User;
}