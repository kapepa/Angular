import {Body, Controller, Delete, Get, Post, Put, Query} from '@nestjs/common';
import {CardService, ICard} from "./card.service";

@Controller('/api/card')
export class CardController {
  constructor(private cardService: CardService) {
  }

  @Get('/all')
  async getAll(): Promise<ICard[]> {
    return this.cardService.allCard();
  }

  @Post('/append')
  async appendCard(@Body() body: ICard): Promise<ICard> {
    return await this.cardService.appendCard(body);
  }

  @Put('/completed')
  async completedCard(@Body() body): Promise<ICard> {
    return await this.cardService.completedCard(body);
  }

  @Delete()
  async deleteCard(@Query('id') id: string): Promise<void> {
    await this.cardService.deleteCard(id)
  }
}
