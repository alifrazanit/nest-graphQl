import { Module } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersResolver } from '../resolver/users.resolver';
@Module({
    providers: [UsersService, UsersResolver]
})
export class UsersModule {}
