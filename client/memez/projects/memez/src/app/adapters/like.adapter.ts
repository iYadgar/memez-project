//region imports
import {Injectable}        from '@angular/core';
import {ILike}             from '../../../../../../../shared/types/Entities/ILike';
import {IlikeResponse}     from "../../../../../../../shared/types/Entities/IlikeResponse";
import {BaseSocketAdapter} from "./base-socket-adapter.service";

//endregion


@Injectable({
  providedIn: 'root'
})
export class LikeAdapter  {

  constructor(private socketAdapter : BaseSocketAdapter) {

    window['likeAdapter'] = this;
  }

  async getPostLikes(post_id: string): Promise<ILike[]> {
    return this.socketAdapter.request<ILike[]>(`getPostLikes`, {post_id});
  }

  async createLike(likeData): Promise<IlikeResponse> {
    return this.socketAdapter.request('createLike', likeData)
  }

  async unlike(likeId: string): Promise<IlikeResponse> {
    return this.socketAdapter.request(`unlike`, {id: likeId})
  }

  async getLikes() {
    return await this.socketAdapter.request('getLikes');
  }

  async getUserLikes(user_id: string): Promise<ILike[]> {
    return await this.socketAdapter.request(`getUserLikes`, {user_id})
  }


}
