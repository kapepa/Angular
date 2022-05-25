import {Controller, Get} from '@nestjs/common';
import {CardService, ICard} from "./card.service";



@Controller('/api/card')
export class CardController {
  constructor(private cardService: CardService) {
  }

  @Get('/all')
  async getAll(): Promise<ICard[]> {
    return this.cardService.allCard();
  }
}
