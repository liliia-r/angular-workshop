import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { PostsPageComponent } from './posts-page.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { RouterModule } from '@angular/router';

import { PostsPageRoutingModule } from './posts-page-routing.module';

@NgModule({
  declarations: [PostsPageComponent, PostCardComponent, PostFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    PostsPageRoutingModule,
  ],
  exports: [PostsPageComponent],
})
export class PostsPageModule {}
