//region imports
import {Injectable}         from '@angular/core';
import {action, observable} from 'mobx-angular';
import {ILike}              from '../../../../../../../../shared/types/Entities/ILike';
import {RootStore}          from '../root.store';
import {IPost}              from '../../../../../../../../shared/types/Entities/IPost';
import {IlikeResponse}      from "../../../../../../../../shared/types/Entities/IlikeResponse";
import {LikeAdapter}        from "../../adapters/like.adapter";
import {reaction}           from "mobx";

//endregion


@Injectable({providedIn: 'root'})

export class LikeStore {
  @observable currentUserLikes: ILike[] = [];


  constructor(
    public root: RootStore,
    private likeAdapter: LikeAdapter) {
    window['likeStore'] = this;
    this.root.likeStore = this;

    reaction(() => this.root.ps.posts,
      async () => {
        let currentUser = this.root.log.currentUser
        if (currentUser) {
          await this.getCurrentUserLikes(currentUser._id)
          this.currentUserLikes.map(like => {
            return this.root.ps.posts.map(post => {
              post.likedByCurrentUser = post.postedBy._id === like.user_id._id
              !post.likes_amount ? post.likedByCurrentUser = false : post.likedByCurrentUser = true

              return post
            })
          })

        } else {
          this.currentUserLikes = []
        }
      }, {fireImmediately: false}
    )
  }

  @action
  async getCurrentUserLikes(user_id: string) {
    this.currentUserLikes = await this.likeAdapter.getUserLikes(user_id)


  }


  @action
  async createLike(post: IPost): Promise<IlikeResponse> {
    const
      likeInput = {
        user_id: this.root.log.currentUser._id,
        post_id: post._id
      };
    return this.likeAdapter.createLike(likeInput);


  }

  @action
  async unlike(like_id: string): Promise<IlikeResponse> {
    return this.likeAdapter.unlike(like_id)


  }

  @action
  async handleLike(post: IPost) {
    const
      postLikes: ILike[] = await this.root.likeStore.getPostLikes(post._id),
      found: ILike       = postLikes.find(like => like.user_id._id === this.root.log.currentUser._id)
    try {
      if (found) {
        const
          likeToDelete: IlikeResponse = await this.unlike(found._id),
          index: number               = this.currentUserLikes.indexOf(found);
        this.currentUserLikes.splice(index, 1)
        post.likes_amount = likeToDelete.postLikeCount
        post.likedByCurrentUser = false

      } else {
        const newLike: IlikeResponse = await this.createLike(post)
        console.log(newLike, 'newLike');
        post.likes_amount = newLike.postLikeCount
        post.likedByCurrentUser = true

      }

    } catch (e) {
      console.log(e)
    }


  }

  @action
  async getPostLikes(post_id: string) {
    return this.likeAdapter.getPostLikes(post_id);
  }


  @action
  async checkedLikedPosts() {


    this.root.ps.posts.forEach(post => {
      this.currentUserLikes.forEach(like => {
        if (post._id === like.post_id) {

          post.likedByCurrentUser = true
        }
      })
    })
  }

}

