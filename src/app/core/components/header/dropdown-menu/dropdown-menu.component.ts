import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent implements OnInit {
  user$ = this.loginService._user$;

  constructor(public loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.user$);
  }

  onLogOut() {
    this.loginService.logout();
    this.router.navigateByUrl('/');
  }
}
