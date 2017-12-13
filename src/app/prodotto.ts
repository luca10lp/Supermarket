import {User} from "./user";

export class Prodotto {

  id: number;

  nome: string;

  marca: string;

  dataDiScadenza: string;

  categoria: string;

  quantitaDisponibile: number;

  quantitaDaAcquistare: number;

  unita: string;

  prezzoUnitario: number;

  prezzoSenzaIva: number;

  prezzoIvato: number;

  img: string;

  listaUser: User[];

}
