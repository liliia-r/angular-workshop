import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });

  get nameControl() {
    return this.loginForm.get('name');
  }

  get emailControl() {
    return this.loginForm.get('email');
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loginService.login(this.loginForm.value);
    this.router.navigate(['/posts']);
  }
}
