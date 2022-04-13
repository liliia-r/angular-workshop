import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  EMPTY,
  Subscription,
  Observable,
  map,
  tap,
  catchError,
  of,
} from 'rxjs';

import { Post } from './models';
import { PostsService } from './services';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
})
export class PostsPageComponent implements OnInit, OnDestroy {
  data$!: Observable<Post[]>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string>;

  data!: Post[];
  loading: boolean = false;
  error!: string;
  sub!: Subscription;

  searchForm = this.fb.group({
    query: '',
  });

  constructor(private postsService: PostsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loading = true;

    this.data$ = this.postsService.posts$;
    this.error$ = this.postsService.error$;
    this.isLoading$ = this.postsService.isLoading$;

    this.postsService.getPostsApi().subscribe();
  }

  onDeletePost(post: Post) {
    this.postsService.deletePost(post).subscribe();
    // this.data = this.postsService.getPosts();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.postsService.resetPosts();
  }
}
