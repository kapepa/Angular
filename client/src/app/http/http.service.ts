import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICard} from "../card/card.service";
import {IPost} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = `http://localhost:5000`;

  constructor(private http: HttpClient) { }

  getAll() { return this.http.get<ICard[]>(`${this.url}/api/card/all`) };

  appendCard(card: ICard) { return this.http.post<ICard>(`${this.url}/api/card/append`,card) };

  completedCard(card: ICard) { return this.http.put<ICard>(`${this.url}/api/card/completed`,card) }

  deleteCard(cardID: string) { return this.http.delete(`${this.url}/api/card?id=${cardID}`) }

  receivePosts() { return this.http.get<IPost[]>(`${this.url}/api/post/all`) }

  onePost(id: string) { return this.http.get<IPost>(`${this.url}/api/post/one?id=${id}`) }

}
