import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@entities/User.entity';


@ObjectType()
export class authResponse {
    @Field(() => String, { description: 'Akses token jwt' })
    accessToken: string;

    @Field(() => User)
    user: User;
}
