import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models';
import { BehaviorSubject, catchError, EMPTY, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  ROOT_URL = 'https://jsonplaceholder.typicode.com/';

  private _posts$ = new BehaviorSubject<Post[]>([]);
  posts$ = this._posts$.asObservable();

  private _isLoading$ = new BehaviorSubject<boolean>(false);
  isLoading$ = this._isLoading$.asObservable();

  private _error$ = new BehaviorSubject<string>('');
  error$ = this._error$.asObservable();

  constructor(private http: HttpClient) {}

  getPostsApi() {
    this._isLoading$.next(true);

    const link = this.ROOT_URL + 'posts';

    return this.http.get<Post[]>(link).pipe(
      tap((data) => {
        this._isLoading$.next(false);
        this._posts$.next(data.slice(10, 20));
      }),
      catchError(() => {
        const message = "Error, Couldn't get posts";
        this._isLoading$.next(false);
        this._error$.next(message);
        return EMPTY;
      })
    );
  }

  resetPosts() {
    this._posts$.next([]);
  }

  deletePost(post: Post) {
    this._isLoading$.next(true);

    const link = this.ROOT_URL + 'posts/' + post.id;

    return this.http.delete<Post>(link).pipe(
      tap(() => {
        this._isLoading$.next(false);
        const posts = this._posts$.value.filter((item) => item.id != post.id);
        this._posts$.next(posts);
      }),
      catchError(() => {
        const message = "Error, Couldn't Delete";
        this._isLoading$.next(false);
        this._error$.next(message);
        return EMPTY;
      })
    );
  }

  searchPost(value: string): void {
    // this.updatedPosts = this.posts.filter((item) => item.title.includes(value));
  }
}
