import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Prodotto} from "../app/prodotto";
import {CarteDiCredito} from "../app/cartacredito";
import {User} from "../app/user";
import {Observable} from "rxjs/Observable";
import {BACKEND_URL} from "../app/util";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable()
export class ProdottoService {

  prodotto: Prodotto;

  listaProdotti: Prodotto[];

  id: number;

  cartacredito: CarteDiCredito;

  constructor(private http: HttpClient) { }

  saveOrUpdateProdotto(prodotto): Observable<Prodotto>{
    return this.http.post<Prodotto>(BACKEND_URL + '/saveOrUpdateProdotto' , prodotto, httpOptions);
  }

  deleteProdotto(id): Observable<Prodotto>{
    return this.http.delete<Prodotto>(BACKEND_URL + '/deleteProdotto' + id);
  }

  findAll(): Observable<Array<Prodotto>>{
    return this.http.get<Array<Prodotto>>(BACKEND_URL + '/findAll')
  }

  findById(id): Observable<Prodotto>{
    return this.http.get<Prodotto>(BACKEND_URL + '/findById' + id);
  }

  findByCategoria(categoria: string): Observable<Array<Prodotto>> {
    return this.http.get<Array<Prodotto>>(BACKEND_URL + '/findByCategoria' + categoria);
  }

  addprodotto(id, cartacredito, quantita:number): Observable<User>{
    return this.http.post<User>(BACKEND_URL + '/addprodotto' + [id, cartacredito, quantita], httpOptions);
  }

}
