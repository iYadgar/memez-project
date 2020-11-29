import {Component, OnInit} from '@angular/core';
import {SignupStore}       from "../../stores/views/signup-store.service";

@Component({
  selector   : 'mem-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls  : ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    public sus: SignupStore
  ) {
  }

  ngOnInit(): void {
  }

}
