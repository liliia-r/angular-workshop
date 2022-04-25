import { BehaviorSubject, catchError, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../posts-page/models';

@Injectable({
  providedIn: 'root',
})
export class ApiPostService {
  ROOT_URL = 'https://jsonplaceholder.typicode.com/';

  private _error$ = new BehaviorSubject<string>('');
  error$ = this._error$.asObservable();

  constructor(private http: HttpClient) {}

  getPost(id: number) {
    const link = `${this.ROOT_URL}posts/${id}`;
    return this.http.get<Post>(link).pipe(
      catchError(() => {
        const message = "Error, Couldn't get post";
        this._error$.next(message);
        return EMPTY;
      })
    );
  }
}
