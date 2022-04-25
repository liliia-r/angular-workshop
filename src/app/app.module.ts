import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Core
import { CoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';
import { HomePageModule } from './pages/home-page/home-page.module';
import { PostsPageModule } from './pages/posts-page/posts-page.module';
import { PostPageModule } from './pages/post-page/post-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    CoreModule,
    HomePageModule,
    PostsPageModule,
    PostPageModule,
    // Go last
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
