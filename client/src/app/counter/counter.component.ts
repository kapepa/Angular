import { Component, OnInit } from '@angular/core';
import { CounterService } from "./counter.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  changeCount(e: Event) {
    const target = e.target as HTMLButtonElement;
    const data = target.dataset['count'];
    if(data === 'decrease' && this.counterService.count > 0)  this.counterService.decrease() ;
    if(data === 'increase') this.counterService.increase() ;
  }

}
