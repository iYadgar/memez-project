import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'mem-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {

  }

  routeToProfile() {
    this.router.navigateByUrl('profile')
      .then(r => r);

  }

  routeToFeed() {
    this.router.navigateByUrl('feed')
      .then(r => r);

  }
}
