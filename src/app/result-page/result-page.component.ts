import { Forecast } from './../models/forecast';
import { IWeather } from './../models/weather';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../services/weather.service';

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

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.sub = params['city'];
    });

    const _weather = this.weatherService.getWeather(this.sub);
    _weather.then(data => this.weather = data);

    const _forecast = this.weatherService.getForecast(this.sub);
    console.log(_forecast);
    _forecast.then(data => this.forecast = data);
  }
}

