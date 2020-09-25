import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  loginUserName = 'Gest';
  @Input('users-data') userData;

  menus = [
    { path: '/', name: 'Home' },
    { path: '/users', name: 'Users' },
    { path: '/404', name: 'Not Found' },
  ];

  constructor() {}

  ngOnInit(): void {
    if (this.userData) {
      this.loginUserName = this.userData[0].name;
    }
  }
}
