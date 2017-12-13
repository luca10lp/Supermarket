import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CarteDiCredito} from "../app/cartacredito";
import {Observable} from "rxjs/Observable";
import {BACKEND_URL} from "../app/util";
import {User} from "../app/user";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable()
export class CartacreditoService {

   cartaDiCredito: CarteDiCredito;

   user:User;

   id: number;

  constructor(private http: HttpClient) {
  }

  save(cartacredito):Observable<CarteDiCredito> {
    return this.http.post<CarteDiCredito>(BACKEND_URL + '/save', cartacredito + httpOptions);
  }

  delete(id) : Observable<CarteDiCredito> {
    return this.http.delete<CarteDiCredito>(BACKEND_URL + '/delete' + id);
  }

  findByUserId(idUser: number) : Observable<Array<CarteDiCredito>> {
    return this.http.get<Array<CarteDiCredito>>( BACKEND_URL + '/findByUserId' + idUser);
  }

  findById(id) : Observable<CarteDiCredito> {
    return this.http.get<CarteDiCredito>(BACKEND_URL + '/findById' + id);
  }



}
