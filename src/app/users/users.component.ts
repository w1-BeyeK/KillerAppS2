import { Component, OnInit } from '@angular/core';
import {User} from "../_models";
import {UserService} from "../_services";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(
      private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.users = users;
      });
  }

}
