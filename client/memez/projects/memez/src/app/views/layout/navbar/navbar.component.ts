import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router}                                  from '@angular/router';

@Component({
  selector   : 'mem-navbar',
  templateUrl: './navbar.component.html',
  styleUrls  : ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() profileClick = new EventEmitter()
  @Output() feedClick = new EventEmitter()
  @Output() headerClick = new EventEmitter()

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


}
