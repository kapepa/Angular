import { Component, OnInit } from '@angular/core';
import {CardService} from "./card.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getAll()
  }

}
