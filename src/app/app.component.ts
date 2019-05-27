import {Component, OnInit} from '@angular/core';
import {User} from "./_models";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  checkStorage(key: string) {
    return localStorage.getItem(key);
  }

  user : User;

  getCurrentUserName() : string {
    let value = this.checkStorage("currentUser");

    if(value) {
      this.user = JSON.parse(value);
    }

    return this.user.firstName + " " + this.user.lastName;
  }

  checkKeyExists(key: string) {
    return !(localStorage.getItem(key) == null);
  }
}
