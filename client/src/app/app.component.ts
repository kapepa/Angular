import {ChangeDetectionStrategy, Component, Input, OnInit, Type, ViewChild, ViewEncapsulation} from '@angular/core';
import {Observable} from "rxjs";
import {DynamicDirective} from "./dynamic.directive";
import {PopupComponent} from "./popup/popup.component";

export interface IPost {
  id: string,
  title: string,
  text: string,
}

export interface ISearch {
  title: string,
  text: string,
}

class AdItem {
  constructor(public component: Type<any>, public data: any) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  popup: boolean = true;
  posts: IPost[] = [
    { id: 'a1', title: 'First Article', text: 'First Lorem ipsum dolor sit amet'},
    { id: 'b2', title: 'Two Article', text: 'Two Lorem ipsum dolor sit amet'},
    { id: 'c3', title: 'Three Article', text: 'Three Lorem ipsum dolor sit amet'},
  ]
  searchList: ISearch[] = [
    { title: 'First search title', text: 'First search text' },
    { title: 'Two search title', text: 'Two search text' },
    { title: 'Three search title', text: 'Three search text' },
  ];
  field = 'title';
  search = '';
  data = new Date();
  time = new Date();
  text = 'text'
  digit = [ 2, 4, 6 ];

  @ViewChild(DynamicDirective, {static: true}) appDynamic!: DynamicDirective;

  ngOnInit(): void {

  }

  appendPost(post: IPost) {
    this.posts.unshift(post)
  }

  delPost(i: number) {
    this.posts.splice(i,1);
  }

  promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Friends')
    },3000);
  })

  date$: Observable<Date> = new Observable<Date>((obs) => {
    setInterval(() => {
      obs.next(new Date())
    },1000)
  })

  @Input() ads: AdItem[] = [];
  currentAdIndex = -1;

  public popupCondition(): void {
    // this.popup = !this.popup;

    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.appDynamic.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<PopupComponent>(adItem.component);

    // componentRef.instance.data = adItem.data;
  }
}
