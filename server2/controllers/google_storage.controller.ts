//region imports
import {BaseController, IBaseController} from "./base.controller";
import {Bucket, Storage}                 from "@google-cloud/storage"
import * as path                         from "path";
import {config}                          from "../config/config";
//endregion
 


export interface IGoogleStorageController extends IBaseController {
	googleCloud: Storage
	bucket: Bucket

}

export class Google_storageController extends BaseController implements IGoogleStorageController {
	googleCloud: Storage = new Storage({
		keyFilename: path.join(__dirname, '../config/radiant-snow-300512-d6815b57c6ec.json'),
		projectId  : 'radiant-snow-300512'
	})
	bucket: Bucket = this.googleCloud.bucket(config.GCLOUD_STORAGE_BUCKET)


}
