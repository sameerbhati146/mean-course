import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'first', content: 'this is the first post'},
  //   {title: 'second', content: 'this is the second post'},
  //   {title: 'third', content: 'this is the third post'}
  // ];

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostService) {}

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdatedListner()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
        console.log(this.posts, 'post-list====');
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
