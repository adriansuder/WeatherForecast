import { Forecast } from './../models/forecast';
import { IWeather } from './../models/weather';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  constructor(private weatherService: WeatherService, public activatedRoute: ActivatedRoute, private router: Router) { }

  public weather: IWeather;
  public forecast: Forecast;
  sub: string;

  scrollToElement($element): void {
    const element = document.querySelector("#FivedayWeatherLabel")
    if(element)element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
 
  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.sub = params['city'];
    });

    const _weather = this.weatherService.getWeather(this.sub);
    _weather.then(data => this.weather = data).catch((err: HttpErrorResponse) => {
      this.router.navigate(['/']);
    });

    const _forecast = this.weatherService.getForecast(this.sub);
    _forecast.then(data => this.forecast = data).catch((err: HttpErrorResponse) => {
      this.router.navigate(['/']);
    });
  }
}

