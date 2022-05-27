import {Controller, Get} from '@nestjs/common';
import {IPost, PostService} from "./post.service";

@Controller('/api/post')
export class PostController {
  constructor(
    private postService: PostService,
  ) {}

  @Get('/all')
  async allPost(): Promise<IPost[]>{
    return await this.postService.allPost();
  }
}
