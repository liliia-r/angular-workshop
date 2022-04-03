import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../models';
import { PostsService } from '../../services';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() item!: any;
  @Input() isEven!: boolean;

  @Output() delete = new EventEmitter<Post>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(post: Post) {
    this.delete.emit(post)
  }
}
