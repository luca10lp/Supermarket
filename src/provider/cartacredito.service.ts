import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CarteDiCredito} from "../app/cartacredito";
import {Observable} from "rxjs/Observable";
import {BACKEND_URL, BACKEND_URL_CARTA} from "../app/util";
import {User} from "../app/user";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CartacreditoService {

  cartacredito: CarteDiCredito;

  user: User;

  id: number;

  constructor(private http: HttpClient) {
  }

  save(cartacredito): Observable<CarteDiCredito> {
    return this.http.post<CarteDiCredito>(BACKEND_URL_CARTA + '/save', cartacredito + httpOptions);
  }

  delete(id): Observable<CarteDiCredito> {
    return this.http.delete<CarteDiCredito>(BACKEND_URL_CARTA + '/delete/' + id);
  }

  findByUserId(): Observable<Array<CarteDiCredito>> {
    return this.http.get<Array<CarteDiCredito>>(BACKEND_URL_CARTA + '/findByUserId');
  }

  findById(id): Observable<CarteDiCredito> {
    return this.http.get<CarteDiCredito>(BACKEND_URL_CARTA + '/findById/' + id);
  }


}
