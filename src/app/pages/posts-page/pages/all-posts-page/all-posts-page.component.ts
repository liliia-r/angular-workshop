import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-posts-page',
  templateUrl: './all-posts-page.component.html',
  styleUrls: ['./all-posts-page.component.scss'],
})
export class AllPostsPageComponent implements OnInit {
  sub!: Subscription;
  data$ = this.postsService.posts$;
  error$ = this.postsService.error$;
  isLoading$ = this.postsService.isLoading$;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
   this.postsService.getAllPosts().subscribe()
  }


  onDeletePost(post: Post){
    this.postsService.deletePost(post).subscribe()
  }

  ngOnDestroy() {
    this.postsService.resetPosts();
    this.sub?.unsubscribe();
  }

}
