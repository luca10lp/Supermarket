import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user/user.component";
import {CartacreditoComponent} from "./cartacredito/cartacredito.component";
import {ProdottoComponent} from "./prodotto/prodotto.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: '', component: ProdottoComponent},
  { path: 'credit-card', component: CartacreditoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
// ad ogni componente che deve essere sotto autenticazione va aggiunto il [canactviate] authguard (tipo)
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
