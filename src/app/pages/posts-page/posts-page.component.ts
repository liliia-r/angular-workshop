import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
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

  sub!: Subscription;

  searchForm = this.fb.group({
    query: '',
  });

  constructor(private postsService: PostsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe();

    this.data$ = this.postsService.posts$;
    this.isLoading$ = this.postsService.isLoading$;
    this.error$ = this.postsService.error$;
  }

  onAddPost(newPost: { title: string; body: string }) {
    this.postsService.createPost(newPost).subscribe();
  }

  onDeletePost(post: Post) {
    this.postsService.deletePost(post).subscribe();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.postsService.resetPosts();
  }
}
