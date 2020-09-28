import { CovidService } from './../../services/covid.service';
import { Component, Input, OnInit } from '@angular/core';
import { Covid, DataGraficaCovid } from './../../interfaces/interfacesCovid';



@Component({
  selector: 'app-grafica-barra-covid',
  templateUrl: './grafica-barra-covid.component.html',
  styleUrls: ['./grafica-barra-covid.component.css'],
})
export class GraficaBarraCovidComponent implements OnInit {


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

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.covidService.getCovidArg().subscribe((resp) => {
      let data = resp.map((item) => {
        return { name: item.Date.slice(2, -10), value: item.Cases };
      });
      this.covidData = data;
    });
  }

  onSelect(event) {
    console.log(event);
  }
}






