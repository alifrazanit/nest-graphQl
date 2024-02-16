import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class authInput {
  @Field(() => String, { description: 'Masukkan username' })
  username: string;

  @Field(() => String, { description: 'Masukkan password' })
  password: string;
}
