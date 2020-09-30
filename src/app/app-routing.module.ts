import { GotyComponent } from './pages/goty/goty.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Arg', component: InicioComponent},
  { path: 'Mundo', component: GotyComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'Arg'}
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
