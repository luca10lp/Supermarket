import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../provider/login.service";
import {SharedService} from "../provider/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  logged = false;
  user = {username: '', password: ''};

  constructor(private loginService: LoginService, private router: Router, private _sharedService: SharedService) {
    let userLogged = JSON.parse(localStorage.getItem('user'));
    if (userLogged != null) {
    }
    let token: string[] = atob(localStorage.getItem('token')).split(':');
    let user = {username: token[0], password: token[1]};
    this.loginService.login(user).subscribe(data => {
      console.log('logged' + data)
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('token', btoa(user.username + ':' + user.password));
      this.logged = true;
      this.router.navigate(['prodotto']);
    }, err => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.logged = false;
      this.router.navigate(['login']);
    })

    _sharedService.changeEmitted$.subscribe(text => {
      console.log(text);
      this.logged = true;
    });
  }

  logout() {
    this.loginService.logout().subscribe(data => {
      console.log('Logout user: ' +  data);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.logged = false;
      this.router.navigate(['login']);
    }, err => {
      console.error(err);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.logged = false;
      this.router.navigate(['login']);
    });
  }

}
