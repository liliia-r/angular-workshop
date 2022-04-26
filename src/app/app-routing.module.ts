import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post.component';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'post/:id', component: PostPageComponent },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts-page/posts-page.module').then(m => m.PostsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
