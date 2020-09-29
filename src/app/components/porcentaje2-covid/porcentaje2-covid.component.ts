import { DataGraficaCovid } from './../../interfaces/interfacesCovid';
import { CovidService } from './../../services/covid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porcentaje2-covid',
  templateUrl: './porcentaje2-covid.component.html',
  styleUrls: ['./porcentaje2-covid.component.css'],
})
export class Porcentaje2CovidComponent implements OnInit {

  covidData: DataGraficaCovid[] = [];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'right';

  colorScheme = 'nightLights';

  constructor(private covidService: CovidService) {}
  ngOnInit(): void {
    this.covidService.getCovidTotal().subscribe((resp) => {
      const arrayR = Object.values(resp);
      const arrayF = Object.values(arrayR[2]);

      arrayF.sort((a, b) => b.TotalDeaths - a.TotalDeaths);
      //arrayF.splice(20);

      let data = arrayF.map((item) => {
        return {
          name: item['Country'],
          value: item['TotalDeaths'],
        };
      });

      this.covidData = data;
    });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
