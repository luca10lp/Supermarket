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

  listaProdottiCarrello: Array<Prodotto> = new Array();

  logged = false;

  user: User;

  cerca: string;


  constructor(private prodottoService: ProdottoService, public snackBar: MatSnackBar) {
    this.findAll();
  }

  ngOnInit() {
  }

  aggiungiAlCarrello(prod: Prodotto) {
    this.listaProdottiCarrello = <Array<Prodotto>>JSON.parse(localStorage.getItem("listaProdottiCarrello"));
    console.log(this.listaProdottiCarrello);
    let a: boolean;

    if (this.listaProdottiCarrello.length == 0) {
      this.listaProdottiCarrello.push(prod);
      prod.quantitaDaAcquistare++;
      localStorage.setItem('listaProdottiCarrello', JSON.stringify(this.listaProdottiCarrello));
    } else {
      while ( a != true) {
        for (let p of this.listaProdottiCarrello) {
          if (p.nome === prod.nome && p.dataDiScadenza === prod.dataDiScadenza && p.prezzoIvato === prod.prezzoIvato) {
            a = true;
            console.log("P: " + p.quantitaDaAcquistare);
            p.quantitaDaAcquistare++;
            console.log("P2: " + p.quantitaDaAcquistare);
            console.log("UGUALI");
          }else {
            console.log("DIVERSI");
          }
        }
        if (a != true) {
          this.listaProdottiCarrello.push(prod);
          console.log(this.listaProdottiCarrello);
        }
      }  localStorage.setItem('listaProdottiCarrello', JSON.stringify(this.listaProdottiCarrello));

    }
    this.openSnackBar();
  }


  // let a = false
  // for (let p of this.listaProdottiCarrello) {
  //     if (p.nome === prod.nome) {
  //           prod.quantitaDaAcquistare++
  //           localStorage.setItem('listaProdottiCarrello', JSON.stringify(this.listaProdottiCarrello));
  //           console.log("else "+ prod.quantitaDaAcquistare)
  //         a = true;
  //         }
  //       }
  //       if (a != true) {
  //         this.listaProdottiCarrello.push(prod);
  //         localStorage.setItem('listaProdottiCarrello', JSON.stringify(this.listaProdottiCarrello));
  //         console.log(this.listaProdottiCarrello);
  //       }
  //     }


  //   console.log(p);
  //    let a: boolean = false;
  //    if (p.nome === prod.nome && p.dataDiScadenza === prod.dataDiScadenza && p.prezzoIvato === prod.prezzoIvato) {
  //     console.log("so uguali");
  //     a = true;
  //   } else {
  //     console.log("so diversi");
  //
  //
  //   }
  //   if (a == false) {
  //     console.log("A: " + a);
  //     this.listaProdottiCarrello.push(prod);
  //     localStorage.setItem('listaProdottiCarrello', JSON.stringify(this.listaProdottiCarrello));
  //     console.log(this.listaProdottiCarrello);
  //   } else {
  //     console.log("A: " + a);
  //     a=false;
  //   }
  // }


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

  openSnackBar() {
    this.snackBar.open("Prodotto aggiunto al carrello", "carrello", {
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
