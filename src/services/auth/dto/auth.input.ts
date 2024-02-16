import { Field, InputType } from "@nestjs/graphql";
import{ IsNotEmpty, IsString, MaxLength } from 'class-validator'

@InputType()
export class AuthInput{
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