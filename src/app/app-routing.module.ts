import { IWeather } from './models/weather';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultPageComponent} from '../app/result-page/result-page.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'result/:city',
    component: ResultPageComponent
  },
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
