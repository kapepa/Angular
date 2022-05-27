import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [
    PostComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PostModule { }
