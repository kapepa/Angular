import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { PostComponent } from "./post/post.component";
import { AboutComponent } from "./about/about.component";
import { ArticleComponent } from "./article/article.component";
import { ErrorComponent } from "./error/error.component";

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'post', component: PostComponent },
  { path: 'about', component: AboutComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
