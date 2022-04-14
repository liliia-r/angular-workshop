import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsPageComponent } from './posts-page.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { AddPostComponent } from './components/add-post/add-post.component';

@NgModule({
  declarations: [PostsPageComponent, PostCardComponent, AddPostComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [PostsPageComponent],
})
export class PostsPageModule {}
