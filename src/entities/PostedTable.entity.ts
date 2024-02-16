import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType("PostTable",{ description: 'Post entity' })
export class PostedTable {
  @Field(() => Int, { description: 'Post ID' })
  id: number;

  @Field(() => String, { defaultValue: '', nullable: true, description: 'title' })
  title: string;

  @Field(() => String, { defaultValue: '', nullable: true, description: 'content' })
  content: String;

  @Field(() => Boolean, { defaultValue: false, nullable: true, description: 'published' })
  published: Boolean;

  @Field(() => Date, { defaultValue: new Date(), nullable: true,  description: 'Auto Date' })
  createdAt: Date;

  @Field(() => Date, { defaultValue: new Date(), nullable: true,description: 'Auto Date' })
  updatedAt: Date;
}
