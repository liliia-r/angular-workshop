import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false
  
  constructor() { }

  login() {
    this.isLoggedIn = true
  }

  logout() {
    this.isLoggedIn = false
  }
}
