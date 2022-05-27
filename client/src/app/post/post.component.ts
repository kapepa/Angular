import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {PostService} from "./post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  constructor(
    private titleService: Title,
    private postService: PostService,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Post');
    this.postService.receivePosts();
  }

  get posts () { return this.postService.posts }
  get title () { return this.titleService.getTitle() }
}
