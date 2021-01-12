//region imports
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost}                                          from '../../../../../../../../shared/types/Entities/IPost';
import {IUser}                                          from "../../../../../../../../shared/types/Entities/IUser";
import * as dayjs                                       from "dayjs";

//endregion


@Component({
	selector   : 'mem-post',
	templateUrl: './post.component.html',
	styleUrls  : ['./post.component.css'],

})
export class PostComponent implements OnInit {
	@Input() post: IPost;
	@Input() currentUser: IUser
	@Output() postDeleted = new EventEmitter();
	@Output() postLiked = new EventEmitter();
	@Output() dashboardClicked = new EventEmitter();
	@Output() imgClicked = new EventEmitter()
	@Output() editClicked = new EventEmitter()

	postDate: string
	postTime: string


	isUserPost: boolean;

	constructor() {
	}

	ngOnInit(): void {
		this.postDate = dayjs(this.post.created).format('DD.MM.YYYY');
		this.postTime = dayjs(this.post.created).format('HH:mm')


	}

	//event handler function
	onPostDeleted(val: IPost) {
		this.postDeleted.emit(val);
	}

	onPostLiked(post: IPost) {
		this.postLiked.emit(post);
	}

	onDashboardClicked(post: IPost) {
		this.dashboardClicked.emit(post)
	}

	onImgClick(postMeme: string) {
		this.imgClicked.emit(postMeme)
	}

	onPostEdit(post: IPost) {
		this.editClicked.emit(post)
	}
}
