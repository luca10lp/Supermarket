import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BACKEND_URL} from "../app/util";
import {Observable} from "rxjs/Observable";
import {User} from "../app/user";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {

  }

  login (user):Observable<User> {
    return this.http.post<User>(BACKEND_URL + '/login', user, httpOptions);
  }

  register(user):Observable<User>{
    return this.http.post<User>(BACKEND_URL + '/register', user, httpOptions);
  }

  logout() {
    return this.http.get(BACKEND_URL + '/logout', {responseType: 'text'});
  }

}
