import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menus = [
    { path: '/', name: 'Home' },
    { path: '/users', name: 'Users' },
    { path: '/404', name: 'Not Found' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
