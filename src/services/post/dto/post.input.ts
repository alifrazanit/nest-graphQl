import { Field, InputType } from "@nestjs/graphql";
import{ IsNotEmpty, IsString, MaxLength, IsBoolean} from 'class-validator'

@InputType()
export class PostInput{
    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    @Field()
    title: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    content: string;

    @IsNotEmpty()
    @IsBoolean()
    @Field()
    published: Boolean;
}

@InputType()
export class UpdatePostInput{
    @IsNotEmpty()
    @Field()
    id:number;

    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    @Field()
    title: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    content: string;

    @IsNotEmpty()
    @IsBoolean()
    @Field()
    published: Boolean;
}