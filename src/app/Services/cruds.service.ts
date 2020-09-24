import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BAKEND_URL } from './API';

@Injectable({
  providedIn: 'root',
})
export class CRUDSService {
  constructor(private url: string, private http: HttpClient) {}

  getData(): Observable<Object> {
    return this.http.get(BAKEND_URL + this.url);
  }
}
