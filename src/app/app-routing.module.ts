import { ChartsComponent } from './pages/charts/charts.component';
import { GotyComponent } from './pages/goty/goty.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'arg', component: InicioComponent },
  { path: 'mundo', component: GotyComponent },
  { path: 'abaut', component: ChartsComponent },
  { path: '', component: InicioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'arg' },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
