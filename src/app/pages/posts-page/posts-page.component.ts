import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Post } from './models';
import { PostsService } from './services';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit, OnDestroy {
  
  data!: Post[];
  sub!: Subscription

  searchForm = this.fb.group({
    query: '',
  });

  
  constructor(private postsService: PostsService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.data = this.postsService.getPosts();
    this.sub = this.searchForm?.valueChanges.subscribe((formValue) => {
      this.postsService.searchPost(formValue.query)
      this.data = this.postsService.getPosts()
    })
  }

  onDeletePost(post: Post) {
    this.postsService.deletePost(post)
    this.data = this.postsService.getPosts()
  }

  ngOnDestroy() {
    this.sub?.unsubscribe()
    this.postsService.resetPosts()
  }
}
