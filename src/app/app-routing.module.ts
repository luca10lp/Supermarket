import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user/user.component";
import {CartacreditoComponent} from "./cartacredito/cartacredito.component";
import {ProdottoComponent} from "./prodotto/prodotto.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {CarrelloComponent} from "./carrello/carrello.component";
import {AuthGuardService} from "../provider/auth-guard.service";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'prodotto', component: ProdottoComponent,canActivate:[AuthGuardService]},
  { path: 'cartacredito', component: CartacreditoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent,},
  { path: 'carrello', component: CarrelloComponent,canActivate:[AuthGuardService]},


// ad ogni componente che deve essere sotto autenticazione va aggiunto il [canactviate] authguard (tipo)
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
