import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http/http.service";
import {IPost} from "../app.component";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article = {} as IPost;

  constructor(
    private titleService: Title,
    private httpService: HttpService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.httpService.onePost(String(id)).subscribe(res => {
      this.article = res
      this.titleService.setTitle(res.title);
    });
    // this.route.params.subscribe(params => {
    //   this.httpService.onePost(params['id']).subscribe(res => {
    //     this.article = res
    //     this.titleService.setTitle(res.title);
    //   });
    // })
  }

}
