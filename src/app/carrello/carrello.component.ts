import {Component, OnInit} from '@angular/core';
import {ProdottoService} from "../../provider/prodotto.service";
import {Router} from "@angular/router";
import {SharedService} from "../../provider/shared.service";
import {Prodotto} from "../prodotto";

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {

  listaProdottiCarrello: Array<Prodotto> = new Array();

  prodotto: Prodotto

  constructor(private prodottoService: ProdottoService, private router: Router, private _sharedService: SharedService) {

    this.findCarrello()
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

  deleteProdotto(prodotto) {

    this.listaProdottiCarrello.splice(this.listaProdottiCarrello.indexOf(prodotto), 1)
    localStorage.setItem("listaProdottiCarrello", JSON.stringify(this.listaProdottiCarrello))

  }

  clearBasket(prodotto){



      }

}
