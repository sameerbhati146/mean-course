import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        console.log(postData, 'response');
        this.posts = postData.posts;
        console.log(this.posts, 'posts from server');
        this.postUpdated.next([...this.posts]);
      });
  }

  getPostUpdatedListner() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {id: null, title, content};
    this.http.post<{message: string}>('http://localhost:3000/api/posts', post)
      .subscribe((responseDate) => {
        console.log(responseDate.message);
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
      });
  }
}
