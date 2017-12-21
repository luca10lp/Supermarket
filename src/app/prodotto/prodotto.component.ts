import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ProdottoService} from "../../provider/prodotto.service";
import {Prodotto} from "../prodotto";
import {User} from "../user";
import {MatSnackBar} from "@angular/material";


@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProdottoComponent implements OnInit {

  listaProdotti: Array<Prodotto> = new Array();

  listaRicerca: Array<Prodotto> = new Array();

  prodotto: Prodotto;

  selected: Prodotto = new Prodotto();

  listaProdottiCarrello: Array<Prodotto> = new Array;

  logged = false;

  user: User;

  cerca: string;

  constructor(private prodottoService: ProdottoService, public snackBar: MatSnackBar) {
    this.findAll();
  }

  ngOnInit() {
  }

  aggiungiAlCarrello(prod: Prodotto) {
    this.listaProdottiCarrello = <Array<Prodotto>>JSON.parse(localStorage.getItem("listaProdottiCarrello"))
    console.log(this.listaProdottiCarrello)
    this.listaProdottiCarrello.push(prod);
    localStorage.setItem('listaProdottiCarrello', JSON.stringify(this.listaProdottiCarrello));
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

  openSnackBar(action: string) {
    this.snackBar.open("Prodotto aggiunto al carrello", "", {
      duration: 2500,
    });
  }

  findByCategoria(categoria: string) {
    this.prodottoService.findByCategoria(categoria).subscribe(data => {
      this.listaProdotti = data;
    }, err => {
      console.error(err);
    })
  }

  search() {
    if (this.cerca != null) {
      this.listaRicerca = this.listaProdotti;
      this.listaRicerca = this.listaRicerca.filter(prod =>
        prod.marca.toLowerCase().includes(this.cerca.toLowerCase()) || prod.nome.toLowerCase().includes(this.cerca.toLowerCase())
      );
    }
  }

  findAll() {
    this.prodottoService.findAll().subscribe(data => {
      this.listaProdotti = data;
      this.listaRicerca = this.listaProdotti;
    }, err => {
      console.error(err);
    })
  }

  selectedItem(p) {
    this.selected = p;
  }

  refresh() {
    location.reload()
  }


}
