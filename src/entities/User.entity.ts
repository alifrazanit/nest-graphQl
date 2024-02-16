import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String, { defaultValue: '', nullable: true, description: 'Nama User' })
  name: string;

  @Field(() => String, { defaultValue: '', nullable: true, description: 'Username' })
  username: String;

  @Field(() => String, { defaultValue: '', nullable: true, description: 'Password' })
  password: String;

  @Field(() => String, { defaultValue: '', nullable: true, description: 'Auto Generate PWD' })
  hashedfreshToken: String;

  @Field(() => Date, { defaultValue: new Date(), nullable: false,  description: 'Auto Date' })
  createdAt: Date;

  @Field(() => Date, { defaultValue: new Date(), nullable: false,description: 'Auto Date' })
  updatedAt: Date;
}
