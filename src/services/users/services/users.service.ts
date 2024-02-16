import { Injectable } from '@nestjs/common';
import { AuthInput } from '../dto/auth.input';

@Injectable()
export class UsersService {
  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} example`;
  }

  signUp(payload: AuthInput) {
    return `This action returns all user`;
  }
}
