import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddComponent
  ],
  exports: [
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class AddModule { }
