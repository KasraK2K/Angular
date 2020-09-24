import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  allUsers;

  constructor(private usersService: UsersService) {
    this.allUsers = this.usersService.allUsers;
  }

  ngOnInit(): void {
    if (!this.usersService.allUsers) {
      this.getAll();
    }
  }

  getAll() {
    this.usersService.getUsers();
  }
}
