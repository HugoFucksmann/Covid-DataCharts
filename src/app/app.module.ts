import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartsComponent } from './pages/charts/charts.component';
import { BarComponent } from './charts/bar/bar.component';
import { LineComponent } from './charts/line/line.component';
import { PieComponent } from './charts/pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GotyComponent,
    ChartsComponent,
    BarComponent,
    LineComponent,
    PieComponent,
  ],
  imports: [
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
