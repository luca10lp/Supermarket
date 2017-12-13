import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { CartacreditoComponent } from './cartacredito/cartacredito.component';
import { UserComponent } from './user/user.component';
import {UserService} from "../provider/user.service";
import {CartacreditoService} from "../provider/cartacredito.service";
import {ProdottoService} from "../provider/prodotto.service";
import {LoginService} from "../provider/login.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './/app-routing.module';
import {AuthGuardService} from "../provider/auth-guard.service";
import {SharedService} from "../provider/shared.service";
import {InterceptorService} from "../provider/interceptor.service";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProdottoComponent,
    CartacreditoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    UserService,
    CartacreditoService,
    ProdottoService,
    LoginService,
    AuthGuardService,
    SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
