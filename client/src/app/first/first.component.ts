import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface IUsr {
  name: string,
  age: number,
  married: boolean,
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  private title = 'First';
  text = '';
  flag = false;
  article = 'one';
  userList: IUsr[] = [
    { name: 'TestOne', age: 2, married: false },
    { name: 'TestTwo', age: 5, married: true },
    { name: 'TestThree', age: 7, married: false },
  ]

  constructor(private titleService:Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  public inputText(e: Event ) {
    const target = (e.target as HTMLInputElement);
    this.text = target.value
  }


}
