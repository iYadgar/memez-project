import {Injectable}         from "@angular/core";
import {action, observable} from "mobx-angular";
import {UploadAdapter}      from "../adapters/upload.adapter";
import {RootStore}          from "./root.store";

@Injectable({
  providedIn: "root"
})

export class UploadStore {
  @observable uploadUrl
  @observable selectedFile: File;
  @observable loading: boolean = false
  formData: FormData = new FormData()

  constructor(
    private uploadAdapter: UploadAdapter,
    public root: RootStore
  ) {
    this.root.ups = this;
  }

  @action
  async onFileUpload(event): Promise<string> {
    this.selectedFile = event.target.files[0]
    this.formData.append('file', this.selectedFile, this.selectedFile.name)
    try {
      this.uploadUrl = await this.uploadAdapter.uploadPhoto(this.formData)
      return this.uploadUrl
    } catch (e) {
      console.log(e)
    }

  }
}
