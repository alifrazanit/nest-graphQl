import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { authResponse } from './dto/auth-response.model';
import { authInput } from './dto/auth.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => authResponse, { description: 'login description'})
  signIn(@Args('authArgs') authArgs: authInput) {
    return this.authService.signIn(authArgs);
  }
}
