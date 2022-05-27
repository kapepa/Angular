import { Module } from '@nestjs/common';
import { CardModule } from './card/card.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [CardModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
