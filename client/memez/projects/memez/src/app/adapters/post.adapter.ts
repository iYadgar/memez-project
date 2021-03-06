//region imports
import {Injectable}        from '@angular/core';
import {BaseAjaxAdapter}   from './base-ajax.adapter';
import {IPost}             from '../../../../../../../shared/types/Entities/IPost';
import {HttpClient}        from '@angular/common/http';
import {BaseSocketAdapter} from "./base-socket-adapter.service";

//endregion


@Injectable({
  providedIn: 'root'
})
export class PostAdapter {


  constructor(public socketAdapter: BaseSocketAdapter) {

    window['PostAdapter'] = this;
  }

  async getPosts(): Promise<IPost[]> {
    return this.socketAdapter.request<IPost[]>('getPosts');
  }

  async createPost(user_id: string, content: string, postMeme: string): Promise<IPost> {
    console.log('postAdapter');
    console.log(content, 'content');
    return this.socketAdapter.request('createPost',
      {
        user_id  : user_id
        , content: content,
        postMeme : postMeme
      })

  }

  async deletePost(post_id: string): Promise<IPost> {
    return this.socketAdapter.request('deletePost', {id: post_id})
  }


  async updatePostContent(post_id: string, content: string) {

    return this.socketAdapter.request<IPost>("updatePost", {id: post_id, content})
  }



}
