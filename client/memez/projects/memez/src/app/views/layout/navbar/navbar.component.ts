//region imports
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router}                                         from '@angular/router';
import {IUser}                                          from "../../../../../../../../../shared/types/Entities/IUser";

//endregion


@Component({
  selector   : 'mem-navbar',
  templateUrl: './navbar.component.html',
  styleUrls  : ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() currentUser: IUser
  @Output() profileClick = new EventEmitter()
  @Output() feedClick = new EventEmitter()
  @Output() logoutClick = new EventEmitter()
  @Output() headerClick = new EventEmitter()
  @Output() onSearch = new EventEmitter()

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  profileClicked() {
    this.profileClick.emit();
  }

  feedClicked() {
    this.feedClick.emit();
  }

  headerClicked() {
    this.headerClick.emit();
  }

  logoutClicked() {
    this.logoutClick.emit();
  }

  searched(value) {
    this.onSearch.emit(value)
  }

}
