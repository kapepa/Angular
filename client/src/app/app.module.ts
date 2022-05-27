import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

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
import { HttpClientModule } from "@angular/common/http";
import { CardModule } from "./card/card.module";
import { HeaderModule } from "./header/header.module";
import { PostModule } from "./post/post.module";

@NgModule({
  declarations: [
    AppComponent,
    AppDirective,
    NumberPipe,
    SearchPipe,
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
    CardModule,
    FormModule,
    HttpClientModule,
    HeaderModule,
    PostModule,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
