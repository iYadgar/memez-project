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

  async getLikes(): Promise<ILike[]> {
    return this.request<ILike[]>('likes');
  }

}
