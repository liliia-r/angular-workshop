import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsPageComponent } from './posts-page.component';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [
    PostsPageComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ],
  exports: [
    PostsPageComponent
  ]
})
export class PostsPageModule { }
