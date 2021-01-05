//region imports
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

//endregion


@Component({
  selector   : 'mem-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls  : ['./profile-img.component.css']
})
export class ProfileImgComponent implements OnInit {
  @Input() url: string
  @Output() imgClicked = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  onImgClick(imgUrl: string) {
    this.imgClicked.emit(imgUrl)
  }

}
