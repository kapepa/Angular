import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {PostService} from "./post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  constructor(
    private titleService: Title,
    private postService: PostService,
    private route: Router,
  ) { }

  get posts () { return this.postService.posts }
  get title () { return this.titleService.getTitle() }

  ngOnInit(): void {
    this.titleService.setTitle('Post');
    this.postService.receivePosts();
  }

  clickQuery(e: Event) {
    const target = e.target as HTMLButtonElement;
    this.route.navigate([],{ queryParams: {test: true} })
  }


}
