import {BaseController, IBaseController} from "./base.controller";
import {ILike}                           from "../../shared/types/Entities/ILike";
import {IPost}                           from "../../shared/types/Entities/IPost";
import {IUser}                           from "../../shared/types/Entities/IUser";

const MongoClinet = require('mongodb').MongoClient();
import {Collection, Db, MongoClient}     from "mongodb";
import {config}                          from "../config/config";

export interface IDBController extends IBaseController {
	saveLike(like: ILike): Promise<any>

	savePost(post: IPost): Promise<any>

	saveUser(user: IUser): Promise<any>

	getLikes(): Promise<ILike[]>

	getPosts(): Promise<IPost[]>

	getUsers(): Promise<IUser[]>

	close(): Promise<any>;

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

				resolve()
			});
		})
	}

	async getLikes(): Promise<ILike[]> {
		return this.likesCollection.find({}).toArray()
	}

	getPosts(): Promise<IPost[]> {
		return this.postsCollection.find({}).toArray()
	}

	getUsers(): Promise<IUser[]> {
		return this.usersCollection.find({}).toArray()
	}

	async saveLike(like: ILike): Promise<any> {
		return this.likesCollection.insertOne(like);
	}

	savePost(post: IPost): Promise<any> {
		return this.postsCollection.insertOne(post);
	}

	async saveUser(user: IUser): Promise<any> {
		try {
			return this.usersCollection.insertOne(user);
		} catch (e) {
			console.log(e)

		}

	}

	close(): Promise<any> {
		return this.client.close();
	}

}

