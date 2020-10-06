import { CovidAPIService } from './../../services/covid-api.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styles: [
  ]
})
export class PieComponent implements OnInit {
  cargando: boolean;
  constructor(private covidAPI: CovidAPIService) { }

  ngOnInit(): void {
    this.covidAPI.getAbautCovidArg().subscribe( (res:any) => {
      const confirmed = res[0].confirmed
      const deaths = res[0].deaths;
      const recovered = res[0].recovered;
      this.cargando = true;
      console.log(confirmed, deaths, recovered);

      var ctx = document.getElementById('myChart');

      var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['confirmados', 'muertes', 'recuperados'],
          datasets: [
            {
              label: 'Arg',
              data: [confirmed, deaths, recovered],
              backgroundColor: ['#f9414420', '#f3722c20', '#f8961e20'],
              borderColor: ['#f94144', '#f3722c', '#f8961e'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            xAxes: [{ stacked: true }],
            yAxes: [
              {
                stacked: false,
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });


    })
  }

}
