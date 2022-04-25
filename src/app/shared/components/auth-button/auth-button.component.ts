import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
})
export class AuthButtonComponent implements OnInit {
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Output() click = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.click.emit();
  }
}
