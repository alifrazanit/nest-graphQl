import { Injectable } from '@nestjs/common';
import { UserInput } from '../dto/users.input';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    private prismaService: PrismaService,
  ) { }

  async create(createExampleInput: UserInput) {
    const salt = await bcrypt.genSalt();
    const hashedPassowrd = await bcrypt.hash(createExampleInput.password, salt);
    const user = this.prismaService.user.create({
      data: {
        name: createExampleInput.name,
        username: createExampleInput.username,
        password: hashedPassowrd,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    })
    return user;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} example`;
  }

}
