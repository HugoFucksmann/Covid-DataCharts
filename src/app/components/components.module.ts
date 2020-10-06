import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficaBarraComponent } from './grafica-barra/grafica-barra.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraficaBarraCovidComponent } from './grafica-barra-covid/grafica-barra-covid.component';
import { PorcentajeGraficaCovidComponent } from './porcentaje-grafica-covid/porcentaje-grafica-covid.component';
import { Porcentaje2CovidComponent } from './porcentaje2-covid/porcentaje2-covid.component';
import { CardChartComponent } from './card-chart/card-chart.component';
import { ChartjsComponent } from './chartjs/chartjs.component';

@NgModule({
  declarations: [
    NavbarComponent,
    GraficaBarraComponent,
    GraficaBarraCovidComponent,
    PorcentajeGraficaCovidComponent,
    Porcentaje2CovidComponent,
    CardChartComponent,
    ChartjsComponent,
  ],
  exports: [
    NavbarComponent,
    GraficaBarraComponent,
    GraficaBarraCovidComponent,
    PorcentajeGraficaCovidComponent,
    Porcentaje2CovidComponent,
    CardChartComponent,
    ChartjsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
})
export class ComponentsModule {}
