//region imports
import {Injectable}      from '@angular/core';
import {BaseAjaxAdapter} from './base-ajax.adapter';
import {IPost}           from '../../../../../../../shared/types/Entities/IPost';
import {HttpClient}      from '@angular/common/http';
//endregion
 


@Injectable({
  providedIn: 'root'
})
export class PostAdapter extends BaseAjaxAdapter {


  constructor(
    http: HttpClient
  ) {
    super(http);
    window['PostAdapter'] = this;
  }

  async getPosts(): Promise<IPost[]> {
    return this.request<IPost[]>('posts');
  }

  async createPost(postContent): Promise<IPost> {
    return this.post('posts', postContent)

  }

  async deletePost(post_id: string): Promise<IPost> {
    return this.delete(`posts/${post_id}`)
  }

  async getOnePost(post_id: string) {
    return await this.request(`posts/${post_id} `)

  }

}
