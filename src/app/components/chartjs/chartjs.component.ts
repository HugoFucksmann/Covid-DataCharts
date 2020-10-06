import { CovidAPIService } from './../../services/covid-api.service';
import { Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styles: [
  ]
})
export class ChartjsComponent implements OnInit {

  constructor(private covidAPI: CovidAPIService) {


  }
  cargando: boolean =false;


  ngOnInit(): void {
    this.covidAPI.getAbautCovid().pipe(
    map((res) =>
      res.sort(
      (a: any, b: any) =>
        b.latest_data.confirmed - a.latest_data.confirmed
      )
    ))
  .subscribe((res:any) => {
    const paises = res.map( res => res.name)
    const confirmados = res.map( res => res.latest_data.confirmed);
    this.getChart(
      'myChart',
      'horizontalBar',
      confirmados.slice(0, 10),
      paises.slice(0, 10),
      'Total Confirmados'
    );

  });
  this.cargando = true;

  }

  getChart(idDOM: string, tipoChart: string , dataa: number[],
    infoY: string[], label?: string, colorFondo?: string[], colorBorde?: string[] ) {
    var ctx = document.getElementById(idDOM);
    let colorFon: string[] = [];
    let colorBor: string[] = [];
    if ( colorFondo === undefined ) {
      colorFon = [
        'rgba(255, 99, 132, 0.3)',
        'rgba(54, 162, 235, 0.3)',
        'rgba(255, 206, 86, 0.3)',
        'rgba(75, 192, 192, 0.3)',
        'rgba(153, 102, 255, 0.3)',
        'rgba(255, 159, 64, 0.3)',
        'rgba(255, 99, 132, 0.3)',
        'rgba(54, 162, 235, 0.3)',
        'rgba(255, 206, 86, 0.3)',
        'rgba(75, 192, 192, 0.3)',
      ];
    } else {
      colorFon = colorFondo;
    }

    if (colorBor === undefined) {
      colorBor = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ];
    } else {
      colorBor = colorBorde;
    }
    let dataSet = {
      label: label,
      data: dataa,
      backgroundColor: colorFon,
      borderColor: colorBor,
      borderWidth: 1,
    }



    let chartjs = {
      type: tipoChart,
      data: {
        labels: infoY,
        datasets: [dataSet],
      },
      options: {
        legend: false,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
    return new Chart(ctx, chartjs);

  }
}
