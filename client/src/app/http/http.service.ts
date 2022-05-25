import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ICard} from "../card/card.service";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = `http://localhost:5000`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ICard[]>(`${this.url}/api/card/all`);
  }

}
