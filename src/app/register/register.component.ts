import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from "../user";
import {LoginService} from "../../provider/login.service";
import {Router} from "@angular/router";
import {Location} from '@angular/common';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  user:User =  new User();

  constructor(private loginService: LoginService, private location: Location, private router: Router) {

  }

  ngOnInit() {
  }

  register(){
    this.loginService.register(this.user).subscribe(data => {
      console.log(data);
      this.router.navigate(['login']);
    }, err=> {
      console.log(err);
    })
  }

}
