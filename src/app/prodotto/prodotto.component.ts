import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {ProdottoService} from "../../provider/prodotto.service";
import {Prodotto} from "../prodotto";
import {User} from "../user";

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProdottoComponent implements OnInit {

  listaProdotti: Array<Prodotto>;

  prodotto: Prodotto;

  user: User;

  constructor(private prodottoService: ProdottoService, ) { }

  ngOnInit() {
  }

  saveOrUpdateProdotto(prodotto) {
    this.prodottoService.saveOrUpdateProdotto(prodotto).subscribe(data => {
      console.log(data);
      prodotto = new Prodotto;
    }, err => {
      console.error(err);
    })
  }

  deleteProdotto(id){
    this.prodottoService.deleteProdotto(id).subscribe( data=> {
      this.prodotto = data;
      location.reload();
    })
  }

  findById(id){
    this.prodottoService.findById(id).subscribe( data=>{
      this.prodotto = data;
    }, err =>{
      console.error(err);
    })
  }

  findByCategoria(categoria: string){
    this.prodottoService.findByCategoria(categoria).subscribe( data=> {
      this.listaProdotti = data;
    }, err=> {
      console.error(err);
    })
  }

  addprodotto(id, cartacredito, quantita:number) {
    this.prodottoService.addprodotto(id, cartacredito, quantita).subscribe( data =>{
      this.user = data;
    }, err=> {
      console.error(err);
    })
  }

  findAll(){
    this.prodottoService.findAll().subscribe(data=> {
      this.listaProdotti = data;
    }, err=> {
      console.error(err);
    })
  }

}
