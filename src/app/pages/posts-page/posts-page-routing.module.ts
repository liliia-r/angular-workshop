import { MyPostsPageComponent } from './pages/my-posts-page/my-posts-page.component';
import { AllPostsPageComponent } from './pages/all-posts-page/all-posts-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsPageComponent } from './posts-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/posts/all-posts', pathMatch: 'full'
  },
  {
    path: '',
    component: PostsPageComponent,
    children: [
      { path: 'all-posts', component: AllPostsPageComponent },
      { path: 'my-posts', component: MyPostsPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsPageRoutingModule {}
