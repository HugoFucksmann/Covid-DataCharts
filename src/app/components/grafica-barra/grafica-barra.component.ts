import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css'],
})
export class GraficaBarraComponent implements OnDestroy {
  result: any[] = [
    {
      name: 'juego 1',
      value: 20,
    },
    {
      name: 'juego 2',
      value: 25,
    },
    {
      name: 'juego 3',
      value: 15,
    },
    {
      name: 'juego 4',
      value: 30,
    },
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = 'nightLights';

  intervalo:number;

  constructor() {

    const newResult = [...this.result];

    this.intervalo = setInterval( () => {
      for (let i in newResult) {
        newResult[i].value = Math.round(Math.random() * 100);
      }

      this.result = [...newResult];

    }, 3000 );
  }


  ngOnDestroy(): void {

    clearInterval( this.intervalo );
  }

  onSelect(event) {
    console.log(event);
  }
}
