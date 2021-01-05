//region imports
import {Component, Input, OnInit, Output} from '@angular/core';
//endregion
 

@Component({
  selector   : 'mem-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls  : ['./profile-img.component.css']
})
export class ProfileImgComponent implements OnInit {
  @Input() url: string


  constructor() {
  }

  ngOnInit(): void {
  }


}
