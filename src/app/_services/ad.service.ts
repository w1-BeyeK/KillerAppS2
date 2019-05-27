import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ad } from '../_models';

@Injectable({ providedIn: 'root' })
export class AdService {
    constructor(
        private http: HttpClient) { }

    getAll() {
        return this.http.get<Ad[]>(`https://i409368core.venus.fhict.nl/api/ad`);
    }
}
