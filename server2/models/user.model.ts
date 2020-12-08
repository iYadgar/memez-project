import * as mongoose      from "mongoose";
import {Schema, Document} from "mongoose";


export interface IUserM extends Document {
	name: IUserM


}

const UserModel: Schema = new Schema({
	name: String,
})


export default mongoose.model<IUserM>('User', UserModel)

