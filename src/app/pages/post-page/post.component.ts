import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPostService } from './services/api-post.service';
import { Post } from '../posts-page/models';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostPageComponent implements OnInit {
  postId!: number;
  post!: Post;
  post$!: Observable<Post>;
  error$!: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private postService: ApiPostService
  ) {}

  ngOnInit(): void {
    // console.log(this.route.snapshot.params['id'])

    // ----BAD
    // this.route.paramMap.subscribe((params: any) => {
    //   this.postId = Number(params.get('id'));

    //   this.postService.getPost(this.postId).subscribe((post) => {
    //     this.post = post;
    //   });
    // });

    // --- Is Ok, but not Perfect
    // this.route.paramMap.pipe(
    //   switchMap((params) => {
    //     return this.postService.getPost(Number(params.get('id')))
    //   })
    // ).subscribe((post) => {
    //   this.post = post;
    // })

    // --- PERFECT
    this.post$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return this.postService.getPost(id);
      })
    );
    this.error$ = this.postService.error$;
  }
}
