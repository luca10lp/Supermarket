import { Component, OnInit } from '@angular/core';
import {ProdottoComponent} from "../prodotto/prodotto.component";
import {ProdottoService} from "../../provider/prodotto.service";
import {Router} from "@angular/router";
import {SharedService} from "../../provider/shared.service";

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {


  prodCompo: ProdottoComponent;

  constructor(private prodottoService: ProdottoService,  private router: Router,  private _sharedService: SharedService) { }

  ngOnInit() {
  }

}
