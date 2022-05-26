import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { FormsModule } from "@angular/forms";
import {ShortPipe} from "../pipe/short.pipe";

@NgModule({
  declarations: [
    CardComponent,
    ShortPipe,
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CardModule { }
