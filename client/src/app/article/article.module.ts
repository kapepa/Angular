import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    ArticleComponent
  ],
  exports: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class ArticleModule { }
