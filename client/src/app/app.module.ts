import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstModule } from "./first/first.module";
import { UserModule } from "./user/user.module";
import { AddModule } from "./add/add.module";
import { ListModule } from "./list/list.module";
import { AppDirective } from './app.directive';
import { NumberPipe } from './pipe/number.pipe';
import { SearchPipe } from './pipe/search.pipe';
import { CounterModule } from "./counter/counter.module";
import { FormModule } from "./form/form.module";


@NgModule({
  declarations: [
    AppComponent,
    AppDirective,
    NumberPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FirstModule,
    UserModule,
    AddModule,
    ListModule,
    CounterModule,
    FormModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
