import { Injectable } from '@angular/core';
import {User} from "../app/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {BACKEND_URL} from "../app/util";

@Injectable()
export class UserService {

  user: User;

  constructor(private http: HttpClient) { }

  deleteUser(id:number): Observable<User> {
    return this.http.delete<User>(BACKEND_URL + '/delete/' + id);
  }

}
