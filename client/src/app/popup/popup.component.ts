import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() title!: string;
  // @Output() popupCondition: EventEmitter<() => void> = new EventEmitter();
  @Output() closeComponent: EventEmitter<() => void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closePopup (e: MouseEvent): void {
    const target = e.target as HTMLElement
    if(target.classList.contains('popup__section') || target.classList.contains('popup__btn') || target.classList.contains('popup__close_x')) {
      // this.popupCondition.emit();
      new this.closeComponent();
    }
  }

}
