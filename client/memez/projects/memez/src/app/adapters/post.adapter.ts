import {Injectable} from '@angular/core';
import {BaseAjaxAdapter} from './base-ajax.adapter';
import {IPost}           from '../../../../../../../shared/types/Entities/IPost';
import {HttpClient}      from '@angular/common/http';


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

}
