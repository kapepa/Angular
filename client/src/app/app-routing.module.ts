import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { PostComponent } from "./post/post.component";
import { AboutComponent } from "./about/about.component";
import { ArticleComponent } from "./article/article.component";
import { ErrorComponent } from "./error/error.component";
import { AuthGuard } from "./auth/auth.guard";
import { MoreComponent } from "./more/more.component";
import {ArticleResolver} from "./article/article.resolver";

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'post', component: PostComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  {
    path: 'article/:id',
    component: ArticleComponent,
    resolve: { article: ArticleResolver },
    canActivate: [AuthGuard] ,
    children: [  { path: 'more', component: MoreComponent} ],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
