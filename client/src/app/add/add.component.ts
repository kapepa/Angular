import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IPost} from "../app.component";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  title = '';
  text = '';
  @ViewChild('someInput') someInput!: ElementRef<HTMLInputElement>;
  @Output() appendPost: EventEmitter<IPost> = new EventEmitter<IPost>();
  constructor() {}

  ngOnInit(): void {}

  changeText(e: Event) {
    const target = (e.target as HTMLInputElement);
    if( target.name === 'title' ) this.title = target.value;
    if( target.name === 'text' ) this.text = target.value;
  }

  changeStr(e: Event) {
    console.log(e)
  }

  sendPost() {
    const id = `${ Date.now() }`;
    const data = {id, title: this.title, text: this.text};
    if( Boolean(this.title) && Boolean(this.text) ) this.appendPost.emit(data);
    this.title = '';
    this.text = '';
  }

  focusDo() {
    this.someInput.nativeElement.focus();
  }
}
