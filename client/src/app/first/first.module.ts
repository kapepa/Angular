import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';



@NgModule({
  declarations: [
    FirstComponent
  ],
  exports: [
    FirstComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FirstModule { }
