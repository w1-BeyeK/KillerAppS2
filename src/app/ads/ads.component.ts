import { Component, OnInit } from '@angular/core';
import {Ad} from "../_models";
import {AdService} from "../_services/ad.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  ads : Ad[];

  constructor(
      private adService : AdService
  ) { }

  ngOnInit() {
    this.getAds();
  }

  getAds(): void {
      this.adService.getAll().pipe(first()).subscribe(ads => {
          this.ads = ads;
      })
  }
}
