import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AuthButtonModule } from 'src/app/shared/components/auth-button/auth-button.module';
import { NavListComponent } from './nav-list/nav-list.component';

import { RouterModule } from '@angular/router';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [HeaderComponent, NavListComponent, DropdownMenuComponent],
  imports: [
    CommonModule,
    AuthButtonModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
