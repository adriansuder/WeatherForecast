import { IWeather } from './../models/weather';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forecast } from '../models/forecast';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    private baseUrl = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?units=metric&';
    private forecastBaseUrl = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?';
    private apikey = 'APPID=b26783a2ce95c1529a589fde9e728365';

    constructor(private http: HttpClient) { }
    public Rx: IWeather;

    getWeather(city: string): Promise<IWeather> {
        const apiurl = this.baseUrl + this.apikey + '&q=' + city;
        return this.http.get<IWeather>(apiurl)
            .toPromise();
    }

    getForecast(city: string): Promise<Forecast> {
        const apiurl = this.forecastBaseUrl + this.apikey + '&q=' + city;
        return this.http.get<Forecast>(apiurl)
            .toPromise();
    }
}
