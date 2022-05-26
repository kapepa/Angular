import { Component, OnInit } from '@angular/core';
import {CardService, ICard} from "./card.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  title = '';

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getAll()
  }

  get cards() { return this.cardService.cards };

  appendCard() {
    this.cardService.appendCard({ completed: false, title: this.title })
    this.title = '';
  }

  completedCard(index: number, card: ICard) {
    card.completed = !card.completed;
    this.cardService.completedCard(index, card);
  }

  deleteCard(index: number, cardID: any) {
    this.cardService.deleteCard(index, cardID);
  }

}
