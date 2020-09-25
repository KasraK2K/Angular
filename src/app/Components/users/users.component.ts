import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  allUsers;
  userId;
  userQueryName;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.allUsers = this.usersService.allUsers; // fill allUser in UserService
    this.userId = this.route.snapshot.paramMap.get('userId'); // get param from real url
    this.userQueryName = this.route.snapshot.queryParamMap.get('name'); // get query param from real url

    /**
     * 
     * query param from dynamic url
     * 
      this.userQueryName = this.route.queryParamMap.subscribe(
        (param) => (this.userQueryName = param.get('name'))
      ); 
    */

    /**
     *
     * add query param to dynamic url
     * 
      this.userQueryName = this.router.navigate(['/users'], {
        queryParams: { name: 'kaveh' },
      });
    */
  }

  ngOnInit(): void {
    if (!this.allUsers) {
      this.getAll();
    }
  }

  getAll(): void {
    this.usersService.getUsers().subscribe((response) => {
      this.usersService.allUsers = response;
      this.allUsers = response;
    });
  }

  refresh(): void {
    this.getAll();
  }
}
