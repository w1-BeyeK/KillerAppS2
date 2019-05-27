import { Component, OnInit } from '@angular/core';
import {City} from "../_models";
import {CityService} from "../_services";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities: City[];

  constructor(
      private cityService : CityService
  ) { }

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.cityService.getAll().pipe(first()).subscribe(cities => {
      this.cities = cities;
    })
  }
}