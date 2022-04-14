import { Post } from './../../models/post.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  form: FormGroup;
  title: string = '';
  text: string = '';

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      text: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
  }

  submit() {
    if (this.form.valid) {
      const formData = { ...this.form.value };
      this.title = formData.title;
      this.text = formData.text;

      const post: Post = { title: this.title, body: this.text, userId: 1 };

      this.postsService.addPost(post).subscribe(() => {
        // console.log(post);
      });

      this.form.reset();
    }
  }
}
