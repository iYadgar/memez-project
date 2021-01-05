//region imports
import {Injectable}                   from '@angular/core';
import {action, computed, observable} from 'mobx-angular';
import {RootStore}                    from '../root.store';
import {IPost}                        from '../../../../../../../../shared/types/Entities/IPost';
import {PostAdapter}                  from "../../adapters/post.adapter";
import {MatDialog}                    from "@angular/material/dialog";
import {PostDialogBoxComponent}       from "../../components/post-dialog-box/post-dialog-box.component";
import {autorun, reaction, toJS}      from "mobx";
import {PostImgDialogComponent}       from "../../components/post-img-dialog/post-img-dialog.component";


//endregion


@Injectable({
  providedIn: 'root'
})
export class PostStore {
  @observable posts: IPost[] = [];
  @observable postImgUrl: string
  @observable uploadEvent;
  @observable postContent: string
  @observable dialogClosed: boolean = false
  loading: boolean = false


  constructor(
    public root: RootStore,
    private postAdapter: PostAdapter,
    public dialog: MatDialog
  ) {
    this.root.ps = this;  //self-registration at root store
    window['postStore'] = this;
    reaction(
      () => this.postContent,
      async () => {
        await this.createPost(this.postContent)
      })

  }


  @computed get userPosts() {
    return this.posts
      .filter(post => post.postedBy._id === this.root.log.currentUser._id)

  }

  @computed get filteredPosts() {
    return this.root.fs.searchTerm ? this.posts.filter((post) => {
      return post.content.includes(this.root.fs.searchTerm) || post.postedBy.name.includes(this.root.fs.searchTerm)
    }) : this.posts
  }


  @action
  async getPosts() {
    this.posts = await this
      .postAdapter
      .getPosts();


  }

  @action
  async createPost(content: string) {
    this.loading = true
    const postInput = {
      user_id : this.root.log.currentUser._id,
      content,
      postMeme: this.postImgUrl
    }
    await this.postAdapter.createPost(postInput)
    this.loading = false
    await this.getPosts()

  }

  @action
  async deletePost(post: IPost) {

    await this.postAdapter.deletePost(post._id);

    await this.getPosts()

  }

  @action
  async getOnePost(post: IPost) {
    return this.postAdapter.getOnePost(post._id)
  }

  @action
  async onImgPost(event) {
    this.uploadEvent = event
    this.postImgUrl = await this.root.ups.onFileUpload(this.uploadEvent)
    await this.handleDialog()


  }

  @action
  async handleDialog() {
    const dialogRef = this.dialog.open(PostDialogBoxComponent, {data: this.postImgUrl})
    this.postContent = await dialogRef.afterClosed().toPromise()
    console.log(this.postContent)

  }

  openImgDialog(memeUrl: string) {
    this.dialog.open(PostImgDialogComponent, {data: memeUrl})
  }

}
