import { Injectable } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

export interface ICard {
  completed: boolean
  title: string
  id?: string
}

@Injectable()
export class CardService {
  cards: ICard[] = [
    {
      completed: false,
      title: 'Hellow this one',
      id: '1',
    },
    {
      completed: false,
      title: 'Hellow this two',
      id: '2',
    },
    {
      completed: false,
      title: 'Hellow this three',
      id: '3',
    },
  ];

  async allCard(): Promise<ICard[]> {
    return this.cards;
  }

  async appendCard(card: ICard): Promise<ICard> {
    const generate = {...card, id: uuidv4()};
    this.cards.push(generate);
    return generate;
  }

  async completedCard(card: ICard): Promise<ICard> {
    const { id } = card;
    const index = this.cards.findIndex( card => card.id === id);
    if(index !== -1) this.cards.splice(index, 1, card);
    return card;
  }

  async deleteCard(cardID: string): Promise<void> {
    const index = this.cards.findIndex( card => card.id === cardID);
    if(index !== -1) this.cards.splice(index,1);
  }
}
