import {autorun, toJS}      from 'mobx';
import {Injectable}         from '@angular/core';
import {action, observable} from 'mobx-angular';
import {ILike}              from '../../../../../../../../shared/types/Entities/ILike';
import {RootStore}          from '../root.store';
import {IPost}              from '../../../../../../../../shared/types/Entities/IPost';


@Injectable({providedIn: 'root'})

export class LikeStore {
  @observable likes: ILike[] = [];

  /*USE_MOCK: boolean = false;*/

  constructor(
    public root: RootStore) {
    window['likeStore'] = this;
    this.root.likeStore = this;
    autorun(() => {
      let i = 0
      console.log(`like store : ${toJS(this.likes.map(like => i++))}`)
    })


  }

  @action
  async getPostLikes(post: IPost) {
    const postLikes: ILike[] = await this.root.likeAdapter.getPostLikes(post._id)
    return post.likes = postLikes
  }

  @action
  async createLike(post: IPost) {
    const likeInput = {
      user_id: this.root.log.currentUser._id,
      post_id: post._id
    }
    return await this.root.likeAdapter.createLike(likeInput)


  }

  @action
  async unlike(like_id: string) {
    await this.root.likeAdapter.unlike(like_id)
  }

  @action
  async handleLike(post: IPost) {

    const
      found = post.likes
        .find(like => like.userLiked._id === this.root.log.currentUser._id)
    console.log(toJS(found), !!found)
    if (!!found) {
      await this.unlike(found._id)
    } else {

      await this.createLike(post)
    }
    await this.root.ps.getPosts()


  }


}

