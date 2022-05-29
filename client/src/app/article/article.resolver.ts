import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {HttpService} from "../http/http.service";
import {IPost} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<IPost> {
  constructor(
    private httpService: HttpService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> {
    return this.httpService.onePost(String(route.paramMap.get('id')));
  }
}
