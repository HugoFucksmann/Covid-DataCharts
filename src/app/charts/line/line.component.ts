import { CovidAPIService } from './../../services/covid-api.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styles: [],
})
export class LineComponent implements OnInit {
  constructor(private covidAPI: CovidAPIService) {}

  ngOnInit(): void {
    this.covidAPI.getAbautCovid()
      .pipe(
        map((res) =>
          res.sort(
            (a: any, b: any) =>
              b.latest_data.confirmed - a.latest_data.confirmed
          )
        )
      ).subscribe( res =>{
      let paises = res.map( (item:any) => item.name)
      let new_confirmed = res.map((item: any) => item.today['confirmed']);


    })

  }


  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Casos';
  timeline: boolean = true;

  colorScheme = 'nightLights';

   multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "1990",
        "value": 62000000
      },
      {
        "name": "2010",
        "value": 73000000
      },
      {
        "name": "2011",
        "value": 89400000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "1990",
        "value": 250000000
      },
      {
        "name": "2010",
        "value": 309000000
      },
      {
        "name": "2011",
        "value": 311000000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "1990",
        "value": 58000000
      },
      {
        "name": "2010",
        "value": 50000020
      },
      {
        "name": "2011",
        "value": 58000000
      }
    ]
  },
  {
    "name": "UK",
    "series": [
      {
        "name": "1990",
        "value": 57000000
      },
      {
        "name": "2010",
        "value": 62000000
      }
    ]
  }
];
}
