
import { DataGraficaCovid } from './../../interfaces/interfacesCovid';
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

    try {
      this.covidService.getCovidTotal().subscribe( resp => {
        console.log('A ', resp);

        let data = resp.map((item) => {
          console.log('B ', item);

          return item;
        });
        console.log('C ',data);

        //this.covidData = data;
      });

    } catch (err) {
      console.log('D ', err);

    }

  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }
}
