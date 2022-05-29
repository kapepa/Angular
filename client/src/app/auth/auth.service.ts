import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  access = false
  constructor(
    private route: Router,
  ) {}

  loginAuth() {
    this.access = true;
  }

  logoutAuth() {
    this.access = false;
    if (this.route.url === '/post') this.route.navigate(['/'])
  }
}
