import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {City} from '../_models';

@Injectable({ providedIn: 'root' })
export class CityService {
    constructor(
        private http: HttpClient) { }

    getAll() {
        return this.http.get<City[]>(`https://i409368core.venus.fhict.nl/api/city`);
    }
}
