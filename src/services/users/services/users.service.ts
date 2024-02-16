import { Injectable } from '@nestjs/common';
import { UserInput } from '../dto/users.input';

@Injectable()
export class UsersService {
  create(createExampleInput: UserInput) {
    return 'This action adds a new example';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} example`;
  }

}
