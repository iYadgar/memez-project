//region imports
import {Injectable}      from "@angular/core";
import {BaseAjaxAdapter} from "./base-ajax.adapter";
import {HttpClient}      from "@angular/common/http";
//endregion


@Injectable({
  providedIn: "root"
})
export class UploadAdapter extends BaseAjaxAdapter {
  constructor(http: HttpClient) {
    super(http);

  }

  async uploadPhoto(file): Promise<any> {
    return this.post('uploadphoto', file);
  }

}
