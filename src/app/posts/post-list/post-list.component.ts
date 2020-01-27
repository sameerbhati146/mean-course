import { Component, Input } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent {
  // posts = [
  //   {title: 'first', content: 'this is the first post'},
  //   {title: 'second', content: 'this is the second post'},
  //   {title: 'third', content: 'this is the third post'}
  // ];

  @Input() posts: Post[] = [];

}
