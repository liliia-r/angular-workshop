import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent implements OnInit {
  user$ = this.loginService.user$;

  constructor(public loginService: LoginService) {}

  ngOnInit(): void {
    console.log(this.user$);
  }

  onLogOut() {
    this.loginService.logout();
  }
}
