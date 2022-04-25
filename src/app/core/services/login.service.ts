import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _user$ = new BehaviorSubject<User | null>(null);
  user$ = this._user$.asObservable();

  isLoggedIn = false;

  constructor(private router: Router) {}

  login({ name, email }: { name: string; email: string }) {
    const user = {
      id: 1,
      name,
      email,
    };
    this._user$.next(user);
  }

  logout() {
    this._user$.next(null);
    this.router.navigate(['/login']);
  }
}
