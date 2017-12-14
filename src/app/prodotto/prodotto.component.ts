import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {ProdottoService} from "../../provider/prodotto.service";
import {Prodotto} from "../prodotto";
import {User} from "../user";
import {LoginService} from "../../provider/login.service";
import {Router} from "@angular/router";
import {SharedService} from "../../provider/shared.service";

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProdottoComponent implements OnInit {

  listaProdotti: Array<Prodotto>;

  prodotto: Prodotto;

  selected: Prodotto = new Prodotto();

  listaCarrello: Array<Prodotto>;

  logged=false;

  user: User;

  constructor(private prodottoService: ProdottoService,private loginService: LoginService, private router: Router,  private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.findAll();
  }

  aggiungiAlCarrello(){
    this.listaCarrello.push(this.prodotto);
    console.log(this.listaCarrello);
  }

  saveOrUpdateProdotto(prodotto) {
    this.prodottoService.saveOrUpdateProdotto(prodotto).subscribe(data => {
      console.log(data);
      prodotto = new Prodotto;
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
  logout() {
    this.loginService.logout().subscribe(() => {
      console.log('logged out.')
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      this.logged = false;
    }, err => {
      console.log(err)
    })
  }
}
