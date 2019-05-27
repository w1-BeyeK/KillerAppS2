import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../_models";
import {Subject} from "rxjs/index";
import {UserService} from "../_services";

@Component({
  selector: 'user-data-table',
  templateUrl: './user-data-table.component.html',
  styleUrls: ['./user-data-table.component.css']
})
export class UserDataTableComponent implements OnDestroy, OnInit {

    dtOptions: DataTables.Settings = {};
    users: User[] = [];

    dtTrigger: Subject<any> = new Subject();

    constructor(
        private userService : UserService
    ) { }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25
        };
        this.userService.getAll()
            .subscribe(users => {
                this.users = users;
                // Calling the DT trigger to manually render the table
                this.dtTrigger.next();
            });
    }


    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
}
