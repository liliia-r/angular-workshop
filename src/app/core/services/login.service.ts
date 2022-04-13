import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public _user$ = new BehaviorSubject({ id: 1, name: '', email: '' });
  user$ = this._user$.asObservable();

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor() {}

  login(name: string, email: string) {
    this._user$.next({ id: 1, name: name, email: email });
    this._isLoggedIn$.next(true);
  }

  logout() {
    this._isLoggedIn$.next(false);
  }
}
