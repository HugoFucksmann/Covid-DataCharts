
import { Covid, Total } from './../interfaces/interfacesCovid';

import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getCovidArg(){

    return this.http.get<Covid[]>(
      `${environment.url}/dayone/country/ar/status/confirmed`);

  }

  getCovidTotal(){
    return this.http.get<Total[]>(`${environment.url}/summary`);
  }

}
