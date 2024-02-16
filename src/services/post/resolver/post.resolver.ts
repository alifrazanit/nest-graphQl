import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostService } from '../services/post.service';
import { PostedTable } from '@entities/PostedTable.entity';
import { PostInput, UpdatePostInput } from '../dto/post.input';


@Resolver(() => PostedTable)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => PostedTable)
  createPost(@Args('createPostInput') createPostInput: PostInput) {
    return this.postService.create(createPostInput);
  }

  @Query(() => [PostedTable], { name: 'getAllPostedTable' })
  findAll() {
    return this.postService.findAll();
  }

  @Query(() => PostedTable, { name: 'findByIdPostTable' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findOne(id);
  }

  @Mutation(() => PostedTable)
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postService.update(updatePostInput.id, updatePostInput);
  }

  @Mutation(() => PostedTable)
  removePost(@Args('id', { type: () => Int }) id: number) {
    return this.postService.remove(id);
  }
}
