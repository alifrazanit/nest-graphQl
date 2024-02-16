import { Module } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { PostResolver } from '../resolver/post.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [PostResolver, PostService, PrismaService],
})
export class PostModule {}
