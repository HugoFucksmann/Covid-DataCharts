
import { DataGraficaCovid, Total } from './../../interfaces/interfacesCovid';
import { CovidService } from './../../services/covid.service';
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

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = 'nightLights';

  constructor(private covidService: CovidService) {
    Object.assign(this, { single });
  }

  ngOnInit(): void {
     this.covidService.getCovidTotal().subscribe((resp) => {
      const arrayR = Object.values(resp);
      const arrayF = Object.values(arrayR[2]);


      arrayF.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
      //arrayF.splice(20);


      let data = arrayF.map((item) => {
        return {
          name: item['Country'],
          value: item['TotalConfirmed'],
        };
      });

      this.covidData = data;
    });
  }

  onActivate(data): void {
  }

}
