import { Component, OnInit, OnDestroy } from '@angular/core';
import { EMPTY, Subscription, switchMap } from 'rxjs';
import { Post } from '../../models';
import { PostsService } from './../../services/posts.service';
import { LoginService } from 'src/app/core/services/login.service';


@Component({
  selector: 'app-my-posts-page',
  templateUrl: './my-posts-page.component.html',
  styleUrls: ['./my-posts-page.component.scss']
})
export class MyPostsPageComponent implements OnInit {
  sub!: Subscription;
  data$ = this.postsService.posts$;
  isLoading$ = this.postsService.isLoading$;
  error$ = this.postsService.error$;


  constructor(private postsService: PostsService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.sub = this.loginService.user$.pipe(
      switchMap((user) => {
        return user ? this.postsService.getMyPosts(user.id) : EMPTY
      })
    ).subscribe();
  }

  onDeletePost(post: Post) {
    this.postsService.deletePost(post).subscribe();
  }

  ngOnDestroy() {
    this.postsService.resetPosts()
    this.sub?.unsubscribe()
  }

}
