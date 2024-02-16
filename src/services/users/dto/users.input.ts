import { Field, InputType } from "@nestjs/graphql";
import{ IsNotEmpty, IsString, MaxLength } from 'class-validator'

@InputType()
export class UserInput{
    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    @Field()
    name: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    @Field()
    username: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    @Field()
    password: string;
}