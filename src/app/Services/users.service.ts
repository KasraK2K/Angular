import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CRUDSService } from './cruds.service';
import { API } from './API';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends CRUDSService {
  allUsers;

  constructor(http: HttpClient) {
    super(API.users.get, http);
  }

  getUsers() {
    return this.getData().subscribe((response) => (this.allUsers = response));
  }
}
