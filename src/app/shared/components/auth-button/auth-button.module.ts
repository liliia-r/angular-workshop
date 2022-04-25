import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthButtonComponent } from './auth-button.component';

@NgModule({
  declarations: [AuthButtonComponent],
  imports: [CommonModule],
  exports: [AuthButtonComponent],
})
export class AuthButtonModule {}
