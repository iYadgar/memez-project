import {Injectable}      from '@angular/core';
import {BaseAjaxAdapter} from './base-ajax.adapter';
import {HttpClient}      from '@angular/common/http';
import {ILike}           from '../../../../../../../shared/types/Entities/ILike';


@Injectable({
  providedIn: 'root'
})
export class LikeAdapter extends BaseAjaxAdapter {


  constructor(
    http: HttpClient
  ) {
    super(http);
    window['likeAdapter'] = this;
  }

  async getPostLikes(post_id: string): Promise<ILike[]> {
    return this.request<ILike[]>(`posts/likes/${post_id} `);
  }

  async createLike(likeIds): Promise<ILike> {
    return this.post('likes', likeIds)
  }

  async unlike(likeId: string): Promise<ILike> {
    return this.delete(`likes/${likeId}`)
  }

  async getLikes() {
    return await this.request('likes');
  }

}
