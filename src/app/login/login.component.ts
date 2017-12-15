import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {LoginService} from "../../provider/login.service";
import {Router} from "@angular/router";
import {SharedService} from "../../provider/shared.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  private user= {username:'', password:''};

  constructor( private loginService: LoginService, private router: Router,  private _sharedService: SharedService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user).subscribe( data => {
      console.log(data);
      localStorage.setItem('user',JSON.stringify(data));
      localStorage.setItem('token', btoa(this.user.username + ':' + this.user.password));
      this._sharedService.emitChange('logged=true');
      this.router.navigate(['prodotto'], {replaceUrl: true});
    }, err => {
      console.error(err);
    })
  }


}
