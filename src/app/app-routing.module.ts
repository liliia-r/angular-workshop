import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./pages/posts-page/posts-page.module').then(
        (m) => m.PostsPageModule
      ),
  },
  {
    path: 'post/:id',
    loadChildren: () =>
      import('./pages/post-page/post-page.module').then(
        (m) => m.PostPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
