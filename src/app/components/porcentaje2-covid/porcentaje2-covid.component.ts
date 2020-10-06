import { CovidAPIService } from './../../services/covid-api.service';
import { DataGraficaCovid } from './../../interfaces/interfacesCovid';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porcentaje2-covid',
  templateUrl: './porcentaje2-covid.component.html',
  styleUrls: ['./porcentaje2-covid.component.css'],
})
export class Porcentaje2CovidComponent implements OnInit {

  covidData: DataGraficaCovid[] = [];
  cargando: boolean;

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'right';

  colorScheme = 'nightLights';

  constructor(private covidService: CovidAPIService) {}
  ngOnInit(): void {
    this.covidService.getCovidTotal().subscribe( async (resp) => {
      const data = await resp['Countries'].map((item) => {
        return {
          name: item.Country,
          value: item.TotalConfirmed,
        };
      });
      data.sort((a, b) => b.value - a.value);
      this.covidData = data;
      this.cargando = true;
    });
  }


}
