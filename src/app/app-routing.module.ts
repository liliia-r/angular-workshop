import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';

const routes: Routes = [
  { path: '',   redirectTo: '/posts', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'posts', component: PostsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
