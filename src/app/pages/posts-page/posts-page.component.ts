import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from './models';
import { PostsService } from './services';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit, OnDestroy {
  data!: Post[];
  
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.data = this.postsService.getPosts();
  }

  onDeletePost(post: Post) {
    this.postsService.deletePost(post)
    this.data = this.postsService.getPosts()
  }

  ngOnDestroy() {}
}
