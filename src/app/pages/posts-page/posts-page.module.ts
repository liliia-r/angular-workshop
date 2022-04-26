import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { PostsPageComponent } from './posts-page.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { RouterModule } from '@angular/router';

import { PostsPageRoutingModule } from './posts-page-routing.module';
import { AllPostsPageComponent } from './pages/all-posts-page/all-posts-page.component';
import { MyPostsPageComponent } from './pages/my-posts-page/my-posts-page.component';
import { PostsNavComponent } from './components/posts-nav/posts-nav.component';

@NgModule({
  declarations: [
    PostsPageComponent,
    PostCardComponent,
    PostFormComponent,
    AllPostsPageComponent,
    MyPostsPageComponent,
    PostsNavComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    PostsPageRoutingModule,
  ],
  exports: [PostsPageComponent],
})
export class PostsPageModule {}
