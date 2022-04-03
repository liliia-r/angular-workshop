import { Injectable } from '@angular/core';
import { Post } from '../models';
import { posts } from './data'

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = posts

  constructor() { }

  getPosts() {
    return this.posts
  }

  deletePost(post: Post) {
    this.posts = this.posts.filter((item) => {
      return item.id !== post.id
    })
  }
}
