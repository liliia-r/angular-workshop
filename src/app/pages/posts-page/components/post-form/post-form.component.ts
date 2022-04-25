import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  @Output() submitPostForm = new EventEmitter<{
    title: string;
    body: string;
  }>();

  postForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitPostForm.emit(this.postForm.value);
  }
}
