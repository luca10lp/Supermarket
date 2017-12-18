import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CartacreditoService} from "../../provider/cartacredito.service";
import {ActivatedRoute} from "@angular/router";
import {CarteDiCredito} from "../cartacredito";
import {User} from "../user";

@Component({
  selector: 'app-cartacredito',
  templateUrl: './cartacredito.component.html',
  styleUrls: ['./cartacredito.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartacreditoComponent implements OnInit {

  listaCarte: Array<CarteDiCredito> = new Array();

  cartacredito: CarteDiCredito;

  user: User;


  constructor(private cartaService: CartacreditoService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  save(cartacredito) {
    if (cartacredito !== null) {
      console.info("Carta di credito" + this.cartacredito);
      this.cartaService.save(cartacredito).subscribe(data => {
        console.log(data);
        cartacredito = new CarteDiCredito;
      }, err => {
        console.error(err);
      })
    } else {
      this.cartaService.save(cartacredito).subscribe(data => {
        console.log(data);
      }, err => {
        console.error(err);
      })
    }
  }

  delete(id) {
    id = +this.route.snapshot.paramMap.get('cartacredito');
    if (id !== 0) {
      this.cartaService.delete(id).subscribe(data => {
        id = data;
        location.reload();
      })
    }
  }

  findById(id) {
    id = +this.route.snapshot.paramMap.get('cartacredito');
    if (id !== 0) {
      this.cartaService.findById(id).subscribe(data => {
        this.cartacredito = data;
      }, err => {
        console.error(err);
      })
    }
  }

  findByUserId(idUser) {
    idUser = +this.route.snapshot.paramMap.get('cartacredito');
    if (idUser !== 0) {
      this.cartaService.findByUserId(idUser).subscribe(data => {
        this.listaCarte = data;
      }, err => {
        console.error(err);
      })
    }

  }

}
