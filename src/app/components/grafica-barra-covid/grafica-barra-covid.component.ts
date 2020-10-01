import { CovidService } from './../../services/covid.service';
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

  constructor(private covidService: CovidService) {
    if (screen.width < 600) this.showLegend = false;
  }

  ngOnInit(): void {

    this.covidService.getAbautCovidArg().subscribe((resp: any) => {
      const array = resp;
      array.sort((a, b) => a.confirmed - b.confirmed);

      const data = array.map((item) => {
        return {
          name: item['date'],
          value: item['confirmed'], //new_confirmed
        };
      });
      this.covidData = data;
      this.cargando = true;
    });
  }

  onSelect(event) {
    console.log(event);
  }
}






