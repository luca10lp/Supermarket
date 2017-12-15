import { Component, OnInit } from '@angular/core';
import {ProdottoComponent} from "../prodotto/prodotto.component";
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

  listaProdottiCarrello: Array<Prodotto>=new Array();

  prodotto:Prodotto


  prodCompo: ProdottoComponent;

  constructor(private prodottoService: ProdottoService,  private router: Router,  private _sharedService: SharedService) {

  this.findCarrello()
  }


  ngOnInit() {
  }

  findCarrello() {
      if(JSON.parse(localStorage.getItem("listaProdottiCarrello"))==null){
        localStorage.setItem("listaProdottiCarrello", JSON.stringify(this.listaProdottiCarrello))
      }
      this.listaProdottiCarrello= JSON.parse(localStorage.getItem('listaProdottiCarrello'))
      console.log("listaProdottiCarrello" + this.listaProdottiCarrello)

  }

  deleteProdotto(id) {
    this.prodottoService.deleteProdotto(id).subscribe(data => {
      this.prodotto = data;
      location.reload();
    })
  }
}
