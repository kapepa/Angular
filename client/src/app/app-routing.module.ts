import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { PostComponent } from "./post/post.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: '', component: CardComponent, data: { title: 'Home' } },
  { path: 'post', component: PostComponent, data: { title: 'Post' } },
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  // { path: '**', component: <component-name> }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
