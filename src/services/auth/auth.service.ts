import { Injectable } from '@nestjs/common';
import { authInput } from './dto/auth.input';

@Injectable()
export class AuthService {
  signIn(payload: authInput) {
    return 'This signIn';
  }
}
