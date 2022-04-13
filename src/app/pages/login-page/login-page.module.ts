import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
