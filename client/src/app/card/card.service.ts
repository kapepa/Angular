import { Injectable } from '@angular/core';
import {HttpService} from "../http/http.service";

export interface ICard {
  completed: boolean
  title: string
  id?: string
}

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards: ICard[] | undefined = [];

  constructor(private httpService: HttpService) { }

  getAll() {
    this.httpService.getAll().subscribe((res) => {
      this.cards = res;
    },error => console.log(error))
  }

  appendCard( card: ICard ) {
    this.httpService.appendCard(card).subscribe(( card: ICard ) => {
      this.cards?.push(card)
    }, error => console.log(error))
  }

  completedCard( index: number, card: ICard ) {
    this.httpService.completedCard(card).subscribe(( card: ICard ) => {
      this.cards?.splice(index, 1, card)
    }, error => console.log(error))
  }

  deleteCard( index: number, cardID: string ) {
    this.httpService.deleteCard(cardID).subscribe(() => {
      this.cards?.splice(index,1);
    }, error => console.log(error))
  }
}
