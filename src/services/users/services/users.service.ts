import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserInput, UserInput } from '../dto/users.input';
import { PrismaService } from 'prisma/prisma.service';
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
    return this.prismaService.user.findMany();
  }

  findOne(id: number) {
    const userExist = this.prismaService.user.findUnique({
      where: { id }
    })
    if (!userExist) {
      throw new NotFoundException('User not found');
    }
    return userExist;
  }


  async update(id: any, payload: UpdateUserInput) {
    const existingUser = await this.prismaService.user.findUnique({
      where: { id }
    });
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }
    const updatedUser = await this.prismaService.user.update({
      where: { id },
      data: payload,
    });
    return updatedUser;
  }

  async remove(id: number) {
    const existingUser = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    await this.prismaService.user.delete({
      where: { id },
    });
  }

  
}
