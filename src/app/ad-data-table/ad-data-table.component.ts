import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ad} from "../_models";
import {Subject} from "rxjs/index";
import {AdService} from "../_services";

@Component({
  selector: 'ad-data-table',
  templateUrl: './ad-data-table.component.html',
  styleUrls: ['./ad-data-table.component.css']
})
export class AdDataTableComponent implements OnDestroy, OnInit {

    dtOptions: DataTables.Settings = {};
    ads: Ad[] = [];

    dtTrigger: Subject<any> = new Subject();

    constructor(
        private adService : AdService
    ) { }

    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 25
        };
        this.adService.getAll()
            .subscribe(ads => {
                this.ads = ads;
                // Calling the DT trigger to manually render the table
                this.dtTrigger.next();
            });
    }


    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
}
