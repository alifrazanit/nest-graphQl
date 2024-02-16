import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType({ description: 'User entity' })
export class User {
  @Field(() => Int, { description: 'User ID' })
  id: number;

  @Field(() => String, { defaultValue: '', nullable: true, description: 'Nama User' })
  name: string;

  @Field(() => String, { defaultValue: '', nullable: true, description: 'Username' })
  username: String;

  @Field(() => String, { defaultValue: '', nullable: true, description: 'Password' })
  password: String;

  @Field(() => String, { defaultValue: '', nullable: true, description: 'Auto Generate PWD' })
  hashedfreshToken: String;

  @Field(() => Date, { defaultValue: new Date(), nullable: true,  description: 'Auto Date' })
  createdAt: Date;

  @Field(() => Date, { defaultValue: new Date(), nullable: true,description: 'Auto Date' })
  updatedAt: Date;
}
