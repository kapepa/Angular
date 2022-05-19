import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost} from "../app.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() post: IPost = {} as IPost;
  @Input() i: number = 0;
  @Output() delPost = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  deletePost(i: number) {
    this.delPost.emit(i);
  }
}
