import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogOut() {
    this.loginService.logout();
  }

}
