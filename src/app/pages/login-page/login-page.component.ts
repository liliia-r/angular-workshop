import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  name: string = '';
  email: string = '';

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submit() {
    if (this.form.valid) {
      const formData = { ...this.form.value };
      this.name = formData.name;
      this.email = formData.email;

      this.loginService.login(this.name, this.email);

      this.router.navigateByUrl('/posts');
      this.form.reset();
    }
  }
}
