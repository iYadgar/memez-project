import {Component, OnInit} from '@angular/core';
import {LoginStore}        from '../../stores/views/login.store';
import {Router}            from '@angular/router';

@Component({
  selector   : 'mem-login',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public ls: LoginStore,
    private route: Router
  ) {
  }

  ngOnInit(): void {

  }



}
