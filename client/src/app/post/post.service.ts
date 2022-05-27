import { Injectable } from '@angular/core';
import { IPost } from "../app.component";
import { HttpService } from "../http/http.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts = [] as IPost[];

  constructor(
    private httpService: HttpService
  ) { }

  receivePosts() {
    this.httpService.receivePosts().subscribe(res => this.posts = res );
  }
}
