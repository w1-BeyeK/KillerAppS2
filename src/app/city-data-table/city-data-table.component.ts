import { Component, OnDestroy, OnInit } from '@angular/core';

import {CityService} from "../_services";
import { City } from '../_models/';
import {Subject} from "rxjs";

@Component({
  selector: 'city-data-table',
  templateUrl: './city-data-table.component.html',
  styleUrls: ['./city-data-table.component.css']
})
export class CityDataTableComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  cities: City[] = [];

  dtTrigger: Subject<any> = new Subject();

  constructor(
      private cityService : CityService
  ) { }

  ngOnInit(): void {
      this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 25
      };
      this.cityService.getAll()
          .subscribe(cities => {
              this.cities = cities;
              // Calling the DT trigger to manually render the table
              this.dtTrigger.next();
          });
  }


    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
  }
}
