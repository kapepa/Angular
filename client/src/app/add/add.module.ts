import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';



@NgModule({
  declarations: [
    AddComponent
  ],
  exports: [
    AddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AddModule { }
