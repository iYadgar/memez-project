import {BaseController, IBaseController} from "./base.controller";
import {ILike}                           from "../../shared/types/Entities/ILike";
import {IPost}                           from "../../shared/types/Entities/IPost";
import {IUser}                           from "../../shared/types/Entities/IUser";
import {Collection, Db, MongoClient}     from "mongodb";
import {config}                          from "../config/config";
//MongoDB Constants
const
	MongoClinet = require('mongodb').MongoClient(),
	ObjectID    = require('mongodb').ObjectID;

export interface IDBController extends IBaseController {
	saveLike(like: ILike): Promise<any>

	savePost(post: IPost): Promise<any>

	saveUser(user: IUser): Promise<any>

	getLikes(): Promise<ILike[]>

	getPosts(): Promise<IPost[]>

	getUsers(): Promise<IUser[]>


	deletePost(post_id: string): Promise<any>


	unLike(like_id: string)

	getPostLikesAmount(post_id: string): Promise<number>

	getPostLikes(post_id: string): Promise<ILike[]>

	getOneUser(user_id: string): Promise<IUser>


	getUserLikes(user_id: string): Promise<ILike[]>

	deletePostLikes(post_id: string): Promise<any>

	getOneLike(like_id: string): Promise<ILike>

	checkForUserEmail(email: string): Promise<IUser>


	close(): Promise<any>

}

export class DBController extends BaseController implements IDBController {
	private client: MongoClient
	private db: Db
	likesCollection: Collection
	postsCollection: Collection
	usersCollection: Collection


	constructor() {
		super();
	}


	async init(): Promise<void> {
		const This = this;

		return new Promise((resolve, reject) => {
			this.client = new MongoClient(config.URL, {
				useUnifiedTopology: true
			})
			this.client.connect(function (err) {
				if (err) {
					console.error('Mongo Err', err);
					return reject()
				}
				console.log("Connected successfully to Mongo");
				This.db = This.client.db(config.dbName);

				This.likesCollection = This.db.collection('likes')
				This.postsCollection = This.db.collection('posts')
				This.usersCollection = This.db.collection('users')


				This.usersCollection.createIndex({email: 1}, {unique: true})
				resolve()

			});

		})

	}

	async getLikes(): Promise<ILike[]> {
		return this.likesCollection.find({}).toArray()
	}

	async getPosts(): Promise<IPost[]> {
		return this.postsCollection.find({}).toArray()
	}

	async getUsers(): Promise<IUser[]> {
		return this.usersCollection.find({}).toArray()
	}

	async saveLike(like: ILike): Promise<any> {

		const newLike = await this.likesCollection.insertOne(like);
		return newLike.ops

	}

	async savePost(post: IPost): Promise<any> {
		const newPost = await this.postsCollection.insertOne(post)
		return newPost.ops
	}

	async saveUser(user: IUser): Promise<any> {
		const newUser = await this.usersCollection.insertOne(user);

		return newUser.ops
	}


	async deletePost(post_id: string): Promise<any> {
		const
			postId       = new ObjectID(post_id),
			postToDelete = await this.postsCollection.deleteOne({_id: postId})

		return postToDelete.result

	}

	async unLike(like_id: string) {
		const
			likeId = new ObjectID(like_id),
			like   = await this.likesCollection.deleteOne({_id: likeId});

		return like.result
	}

	async getPostLikesAmount(post_id: string): Promise<number> {
		return this.likesCollection.countDocuments({post_id: post_id});
	}

	async getPostLikes(post_id: string): Promise<ILike[]> {
		return this.likesCollection.find({post_id: post_id}).toArray()
	}

	async getOneUser(user_id: string): Promise<IUser> {
		const
			userId = new ObjectID(user_id);

		return this.usersCollection.findOne({_id: userId})

	}

	async getUserLikes(user_id: string): Promise<ILike[]> {
		const
			userId = new ObjectID(user_id);


		return this.likesCollection.find({"user_id._id": userId}).toArray();

	}

	async deletePostLikes(post_id): Promise<any> {

		return this.likesCollection.deleteMany({'postLiked': post_id})
	}

	async getOneLike(like_id: string): Promise<ILike> {
		const likeId = new ObjectID(like_id)
		return this.likesCollection.findOne({_id: likeId})
	}

	async checkForUserEmail(email: string): Promise<IUser> {
		return this.usersCollection.findOne({email});
	}

	close(): Promise<any> {
		return this.client.close()
	}


}
