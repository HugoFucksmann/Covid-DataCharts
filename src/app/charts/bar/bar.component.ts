import { Chart } from 'chart.js';
import { CovidAPIService } from './../../services/covid-api.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styles: [
  ]
})
export class BarComponent implements OnInit {


  constructor(private coviApiService: CovidAPIService) {


  }

  getRandomColor() {

    //return color;
  }

  ngOnInit(): void {

    let popMuertess: number[] = []
    let popContagioss: number[] = []
    let paiss: string[] = [];

    this.coviApiService
      .getAbautCovid()
      .pipe(
        map((res) =>
          res.sort(
            (a: any, b: any) =>
              b.latest_data.confirmed - a.latest_data.confirmed
          )
        )
      )
      .subscribe((res) => {

        let paises = res.map((item: any) => item.name);
        let popMuertes = res.map(
          (item: any) => item.latest_data.calculated.death_rate
        );
        let popContagios = res.map(
          (item: any) =>
            item.latest_data.calculated.cases_per_million_population
        );



         var ctx = document.getElementById('myChart');
         var myChart = new Chart(ctx, {
           type: 'pie',
           data: {
             labels: paises.splice(0, 10),
             datasets: [
               {
                 label: '% Contagios',
                 data: popContagios.splice(0, 10),
                 backgroundColor: [
                   '#f9414420',
                   '#f3722c20',
                   '#f8961e20',
                   '#f9844a20',
                   '#f9c74f20',
                   '#90be6d20',
                   '#43aa8b20',
                   '#4d908e20',
                   '#57759020',
                   '#277da120',
                 ],
                 borderColor: [
                   '#f94144',
                   '#f3722c',
                   '#f8961e',
                   '#f9844a',
                   '#f9c74f',
                   '#90be6d',
                   '#43aa8b',
                   '#4d908e',
                   '#577590',
                   '#277da1',
                 ],
                 borderWidth: 1,
               },
               {
                 label: '% muertes',
                 data: popMuertes.splice(0, 10),
                 backgroundColor: [
                   '#f9414420',
                   '#f3722c20',
                   '#f8961e20',
                   '#f9844a20',
                   '#f9c74f20',
                   '#90be6d20',
                   '#43aa8b20',
                   '#4d908e20',
                   '#57759020',
                   '#277da120',
                 ],
                 borderColor: [
                   '#f94144',
                   '#f3722c',
                   '#f8961e',
                   '#f9844a',
                   '#f9c74f',
                   '#90be6d',
                   '#43aa8b',
                   '#4d908e',
                   '#577590',
                   '#277da1',
                 ],
                 borderWidth: 1,
               },
             ],
           },
           options: {
             scales: {
               xAxes: [{ stacked: true }],
               yAxes: [
                 {
                   ticks: {
                     beginAtZero: true,
                   },
                   stacked: false,
                 },
               ],
             },
           },
         });

      });

  }

}
