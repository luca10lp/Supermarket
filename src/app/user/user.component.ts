import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../provider/user.service";
import {User} from "../user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  user: User;

  id: number = +this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute, private userService: UserService) {

  }

  ngOnInit() {
  }

  deleteUser(id) {
    id = +this.route.snapshot.paramMap.get('id');
    if (id !== 0) {
      this.userService.deleteUser(id).subscribe(data => {
        if (confirm("Vuoi cancellare il contatto?")) {
          this.user = data;
          location.reload();
        }
      })
    }
  }

}
