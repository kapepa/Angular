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
  test = 'test'

  constructor(private httpService: HttpService) { }

  getAll() {
    this.httpService.getAll().subscribe((res) => {
      this.cards = res;
    })
  }
}
