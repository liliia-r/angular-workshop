import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Core
import { CoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';
import { HomePageModule } from './pages/home-page/home-page.module';
import { PostsPageModule } from './pages/posts-page/posts-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HomePageModule,
    AppRoutingModule,
    PostsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
