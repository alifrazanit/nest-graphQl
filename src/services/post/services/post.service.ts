import { Injectable, NotFoundException } from '@nestjs/common';
import { PostInput, UpdatePostInput } from '../dto/post.input';
import { PrismaService } from 'prisma/prisma.service';


@Injectable()
export class PostService {
  constructor(
    private prismaService: PrismaService,
  ) { }

  create(createPostInput: PostInput) {
    const postedData = this.prismaService.postedTable.create({
      data: {
        title: createPostInput.title,
        content: createPostInput.content,
        published: createPostInput.published ? true : false
      }
    })
    return postedData;
  }

  findAll() {
    return this.prismaService.postedTable.findMany();
  }

  findOne(id: number) {
    const dataExist = this.prismaService.postedTable.findUnique({
      where: { id }
    });
    if (!dataExist) {
      throw new NotFoundException('User not found');
    }
    return dataExist;
  }

  async update(id: number, updatePostInput: UpdatePostInput) {
    const dataExist = await this.prismaService.postedTable.findUnique({
      where: { id }
    });
    if (!dataExist) {
      throw new NotFoundException('User not found');
    }
    const { content, published, title } = updatePostInput;
    const updatedData = await this.prismaService.postedTable.update({
      where: { id },
      data: {
        content,
        published: published ? true : false,
        title
      },
    });
    return updatedData;
  }

 async remove(id: number) {
    const dataExist = await this.prismaService.postedTable.findUnique({
      where: { id },
    });

    if (!dataExist) {
      throw new NotFoundException('Data not found');
    }

    await this.prismaService.postedTable.delete({
      where: { id },
    });
  }
}
