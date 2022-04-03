import { Injectable } from '@angular/core';
import { Post } from '../models';
import { POSTS } from './data'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = POSTS
  updatedPosts = this.posts;

  constructor() { }

  getPosts() {
    return this.updatedPosts
  }

  resetPosts() {
    this.updatedPosts = [...this.posts]
  }


  deletePost(post: Post): void {
    this.posts = this.posts.filter((item) => {
      return item.id !== post.id
    })

    this.updatedPosts = this.updatedPosts.filter((item) => item.id != post.id);
  }

  searchPost(value: string): void {
    this.updatedPosts = this.posts.filter((item) => item.title.includes(value));
  }

}
