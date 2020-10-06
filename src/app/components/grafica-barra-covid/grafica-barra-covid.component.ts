import { CovidAPIService } from './../../services/covid-api.service';

import { Component, Input, OnInit } from '@angular/core';
import { Covid, DataGraficaCovid } from './../../interfaces/interfacesCovid';



@Component({
  selector: 'app-grafica-barra-covid',
  templateUrl: './grafica-barra-covid.component.html',
  styleUrls: ['./grafica-barra-covid.component.css'],
})
export class GraficaBarraCovidComponent implements OnInit {

  cargando: boolean;
  covidData: DataGraficaCovid[] = [];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Fecha';
  showYAxisLabel = true;
  yAxisLabel = 'Casos';

  colorScheme = 'nightLights';

  constructor(private covidService: CovidAPIService) {
    if (screen.width < 600) this.showLegend = false;
  }

  ngOnInit(): void {
    this.covidService.getAbautCovidArg().subscribe( resp => {
      const data = resp.map((item) => {
        return {
          name: item['date'],
          value: item['confirmed'], //new_confirmed
        };
      });
      data.sort( ( a, b ) => a.value - b.value );
      this.covidData = data;
      this.cargando = true;
    });
  }

  onSelect(event) {
    console.log(event);
  }
}






