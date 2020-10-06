import { Injectable } from '@angular/core';
import { AbautCovid } from './../interfaces/interface-AbautCovid';
import { Covid, Total } from './../interfaces/interfacesCovid';

import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { pluck, map, filter, reduce, skip } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { count } from '@swimlane/ngx-charts';
@Injectable({
  providedIn: 'root',
})
export class CovidAPIService {
  constructor(private http: HttpClient) {}

  getCovidArg() {
    return this.http.get<Covid[]>(
      `${environment.url}/dayone/country/ar/status/confirmed`
    );
  }

  getCovidTotal() {
    return this.http.get<Total[]>(`${environment.url}/summary`);
  }

  getAbautCovidArg(): Observable<AbautCovid[]> {
    return this.http
      .get<AbautCovid[]>('https://corona-api.com/countries/ar')
      .pipe(pluck('data'), pluck('timeline'));
  }

  getAbautCovid(): Observable<AbautCovid[]> {
    return this.http.get<AbautCovid[]>('https://corona-api.com/countries')
    .pipe( pluck('data') );
  }
}
      /*  map((res: any) => res.find((elem) => elem.today.deaths > 50)) */
      /*  map( (res:any) => {
        let t = [];
        console.log( res);

        for (let i = 0; i < res.length; i++) {
          t = res[i].name;
        }

        return t
      } ) */
