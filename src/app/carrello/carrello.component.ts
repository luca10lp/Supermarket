import {Component, OnInit} from '@angular/core';
import {ProdottoService} from "../../provider/prodotto.service";
import {Router} from "@angular/router";
import {SharedService} from "../../provider/shared.service";
import {Prodotto} from "../prodotto";
import {User} from "../user";

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {

  listaProdottiCarrello: Array<Prodotto> = new Array();

  user: User;

  somma: number = 0

  quantita: number

  prodotto: Prodotto;

  prezzoIvato: number;

  constructor(private prodottoService: ProdottoService, private router: Router, private _sharedService: SharedService) {

    this.findCarrello()
    this.sommacarrello()
  }


  ngOnInit() {
  }

  findCarrello() {
    if (JSON.parse(localStorage.getItem("listaProdottiCarrello")) == null) {
      localStorage.setItem("listaProdottiCarrello", JSON.stringify(this.listaProdottiCarrello))
    }
    this.listaProdottiCarrello = JSON.parse(localStorage.getItem('listaProdottiCarrello'))
    console.log("listaProdottiCarrello" + this.listaProdottiCarrello)

  }

  sommacarrello() {

    this.listaProdottiCarrello = JSON.parse(localStorage.getItem('listaProdottiCarrello'))
    for (let prodotto of this.listaProdottiCarrello) {
      this.somma += prodotto.prezzoIvato
      console.log(prodotto.prezzoIvato)
    }
    console.log(this.somma)

  }

  deleteProdotto(prodotto) {

    this.listaProdottiCarrello.splice(this.listaProdottiCarrello.indexOf(prodotto), 1)
    this.somma=this.somma-prodotto.prezzoIvato;
    localStorage.setItem("listaProdottiCarrello", JSON.stringify(this.listaProdottiCarrello))
    location.reload()
  }

  clearBasket(prodotto) {
    for(prodotto of this.listaProdottiCarrello) {
      this.listaProdottiCarrello.splice(this.listaProdottiCarrello.indexOf(prodotto), 1000)
      localStorage.setItem("listaProdottiCarrello", JSON.stringify(this.listaProdottiCarrello))
    }
  }

  compra() {
      this.prodottoService.compra(this.listaProdottiCarrello).subscribe(data => {
        this.user = data;
        console.log(data);
        console.log(this.user);
      }, err => {
        console.error(err);
      })
    }
}
