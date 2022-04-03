import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AuthButtonModule } from 'src/app/shared/components/auth-button/auth-button.module';
import { NavListComponent } from './nav-list/nav-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavListComponent
  ],
  imports: [
    CommonModule,
    AuthButtonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
