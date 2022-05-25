import { Injectable } from '@nestjs/common';

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
}
