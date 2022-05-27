import { Injectable } from '@nestjs/common';

export interface IPost {
  id: string,
  title: string,
  text: string,
}

@Injectable()
export class PostService {
  posts: IPost[] = [
    { id: 'a1', title: 'First Article', text: 'First Lorem ipsum dolor sit amet'},
    { id: 'b2', title: 'Two Article', text: 'Two Lorem ipsum dolor sit amet'},
    { id: 'c3', title: 'Three Article', text: 'Three Lorem ipsum dolor sit amet'},
  ]

  async allPost(): Promise<IPost[]> {
    return this.posts;
  }

  async onePost(id: string): Promise<IPost> {
    return this.posts.find(post => post.id === id);
  }
}
