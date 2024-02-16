import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from '../services/auth.service';

@Resolver()
export class AuthResolver {}
