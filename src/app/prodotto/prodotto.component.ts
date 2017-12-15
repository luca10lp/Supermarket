import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {ProdottoService} from "../../provider/prodotto.service";
import {Prodotto} from "../prodotto";
import {User} from "../user";
import {LoginService} from "../../provider/login.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../provider/shared.service";
import { Location } from '@angular/common';


@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProdottoComponent implements OnInit {

  listaProdotti: Array<Prodotto>=new Array

  prodotto: Prodotto;

  selected: Prodotto = new Prodotto();

  listaProdottiCarrello: Array<Prodotto> = new Array;

  logged=false;

  user: User;

  constructor(private prodottoService: ProdottoService,private loginService: LoginService,
              private router: Router,  private _sharedService: SharedService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.findAll();
  }

  aggiungiAlCarrello(prod:Prodotto) {
    this.listaProdottiCarrello=<Array<Prodotto>>JSON.parse(localStorage.getItem("listaProdottiCarrello")  )
    console.log(this.listaProdottiCarrello)
    this.listaProdottiCarrello.push(prod)
    localStorage.setItem('listaProdottiCarrello',JSON.stringify(this.listaProdottiCarrello));
      console.log(this.listaProdottiCarrello);

  }

  saveOrUpdateProdotto(prodotto) {
    this.prodottoService.saveOrUpdateProdotto(prodotto).subscribe(data => {
      console.log(data);
      prodotto = new Prodotto;
    }, err => {
      console.error(err);
    })
  }



  findById(id) {
    this.prodottoService.findById(id).subscribe(data => {
      this.prodotto = data;
    }, err => {
      console.error(err);
    })
  }

  findByCategoria(categoria: string) {
    this.prodottoService.findByCategoria(categoria).subscribe(data => {
      this.listaProdotti = data;
    }, err => {
      console.error(err);
    })
  }

  addprodotto(id, quantitaDaAcquistare: number) {
      this.prodottoService.addprodotto(id, quantitaDaAcquistare).subscribe(data => {
        console.log(data);
        console.log(this.user);
        this.user = data;
        console.log(this.user);
      }, err => {
        console.error(err);
      })
    }

  findAll() {
    this.prodottoService.findAll().subscribe(data => {
      this.listaProdotti = data;
    }, err => {
      console.error(err);
    })
  }

  selectedItem(p) {
    this.selected = p;
  }



}
