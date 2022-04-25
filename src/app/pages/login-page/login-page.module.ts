import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LoginPageComponent } from './login-page.component';
import { AuthButtonModule } from 'src/app/shared/components/auth-button/auth-button.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageRoutingModule } from './login-page-routing.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthButtonModule,
    LoginPageRoutingModule,
  ],
})
export class LoginPageModule {}
