import { Module } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersResolver } from '../resolver/users.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
    providers: [UsersService, UsersResolver, PrismaService]
})
export class UsersModule {}
