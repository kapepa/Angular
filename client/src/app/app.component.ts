import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface IPost {
  id: string,
  title: string,
  text: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  posts: IPost[] = [
    { id: 'a1', title: 'First Article', text: 'First Lorem ipsum dolor sit amet'},
    { id: 'b2', title: 'Two Article', text: 'Two Lorem ipsum dolor sit amet'},
    { id: 'c3', title: 'Three Article', text: 'Three Lorem ipsum dolor sit amet'},
  ]

  ngOnInit() {}

  appendPost(post: IPost) {
    this.posts.unshift(post)
  }

  delPost(i: number) {
    this.posts.splice(i,1);
  }
}
