
import { CovidAPIService } from './../../services/covid-api.service';
import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.css'],
})
export class CardChartComponent implements OnInit {
  constructor(private covidService: CovidAPIService) {

    this.covidService.getAbautCovidArg().subscribe((res) => {


      let date = res.map((item:any) => {
        return item.date;
      });
      let new_confirmed = res.map((item:any) => {
        return item.new_confirmed;
      });
      let new_deaths = res.map((item:any) => {
        return item.new_deaths;
      });
      date.reverse();
      new_confirmed.reverse();
      new_deaths.reverse();




      //Chart----------------------
      let ctx = document.getElementById('myChart');

      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: date,
          datasets: [
            {
              label: 'confirmados',
              data: new_confirmed,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],

              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            {
              label: 'muertos',
              data: new_deaths,
              backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],

              borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          title: {
            display: false,
            text: 'Titulo de la grafica',
            fontSize: 15,
          },
          maintainAspectRatio: false,
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              fontColor: '#fff',
            },
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
            },
          },
          tooltips: {
            enabled: true,
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
        },
      });
      //End-----------------------------------
    });
  }

  labels: string[] = [];
  data: number[] = [];
  chart = [];


  ngOnInit(): void {







  }

}
