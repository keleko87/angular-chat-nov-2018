import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userSelected$;

  constructor(private http: HttpClient) {
    this.userSelected$ = new Subject();
   }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=5');
  }

  setUser(user) {
    this.userSelected$.next(user);
  }

}
