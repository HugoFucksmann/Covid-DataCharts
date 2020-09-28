import { map } from 'rxjs/operators';
import { Covid, CovidTotal } from './../interfaces/interfacesCovid';

import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getCovidArg(){

    return this.http.get<any[]>(
      `${environment.url}/dayone/country/ar/status/confirmed`
    );
  }

  getCovidTotal(){
    return this.http.get<CovidTotal[]>(`${environment.url}/summary`);
  }
}
