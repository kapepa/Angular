import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class ErrorModule { }
