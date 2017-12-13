
import { Prodotto} from "./prodotto";
import {CarteDiCredito} from "./cartacredito";

export class User {
   id: number;

  username : string;

  password: string;

  tipo: string;

  tel: string;

  via: string;

  cap: string;

  profileType: string;

  listaHistory: History[];

  listaProdotti: Prodotto[];

  carteDiCredito: CarteDiCredito[];

}
