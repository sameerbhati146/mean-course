import { Post } from './post.model';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
  private  posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdatedListner(){
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title, content};
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
}
