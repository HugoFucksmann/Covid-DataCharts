import { CovidAPIService } from './../../services/covid-api.service';

import { DataGraficaCovid, Total } from './../../interfaces/interfacesCovid';

import { single } from './../porcentaje-grafica-covid/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porcentaje-grafica-covid',
  templateUrl: './porcentaje-grafica-covid.component.html',
  styleUrls: ['./porcentaje-grafica-covid.component.css'],
})
export class PorcentajeGraficaCovidComponent implements OnInit {
  single: any[];
  covidData: DataGraficaCovid[] = [];
  cargando:boolean;

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = 'nightLights';

  constructor(private covidService: CovidAPIService) {

  }

  ngOnInit(): void {
     this.covidService.getCovidTotal().subscribe( async (resp) => {
      const data = await resp['Countries'].map( item => {
        return {
          name: item.Country,
          value: item.TotalConfirmed,
        }
      })
      data.sort((a, b) => b.value - a.value);
      this.covidData = data;
      this.cargando = true;


    });
  }
}
