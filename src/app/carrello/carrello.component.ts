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

  listaProdottiCarrello: Array<Prodotto>

  prodotto:Prodotto


  prodCompo: ProdottoComponent;

  constructor(private prodottoService: ProdottoService,  private router: Router,  private _sharedService: SharedService) {

    this.findAll();

  }


  ngOnInit() {
  }

  findAll() {
    this.prodottoService.findAllCarrello().subscribe(data => {
      this.listaProdottiCarrello = data;
      console.log("listaProdottiCarrello" + this.listaProdottiCarrello)
    }, err => {
      console.error(err);
    })
  }

  deleteProdotto(id) {
    this.prodottoService.deleteProdotto(id).subscribe(data => {
      this.prodotto = data;
      location.reload();
    })
  }
}
