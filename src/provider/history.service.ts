import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {BACKEND_URL_HISTORY, BACKEND_URL_PRODOTTO} from "../app/util";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CarteDiCredito} from "../app/cartacredito";
import {History} from "../app/history";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class HistoryService {

  constructor(private http: HttpClient) { }


  findAll(): Observable<Array<History>> {
    return this.http.get<Array<History>>(BACKEND_URL_HISTORY + '/findAll')
  }
  saveOrUpdateHistory(history): Observable<History> {
    return this.http.post<History>(BACKEND_URL_HISTORY + '/save', history, httpOptions);
  }

  findByCod(cod: string): Observable<Array<History>> {
    return this.http.get<Array<History>>(BACKEND_URL_HISTORY + '/findByCod/' + cod);
  }

  findById(id): Observable<History> {
    return this.http.get<History>(BACKEND_URL_PRODOTTO + '/findById/' + id);
  }

  findCodByUser_id(): Observable<Array<History>> {
    return this.http.get<Array<History>>(BACKEND_URL_HISTORY + '/findCodByUserId');
  }
}
