import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  apiUrl = 'https://coronavirus-19-api.herokuapp.com/countries/south%20africa';
  statsUrl = 'https://pomber.github.io/covid19/timeseries.json';
  constructor(private http: HttpClient) { }

  getCountryData(){
    return this.http.get(`${this.apiUrl}`);
  }
  getStats(){
    return this.http.get(`${this.statsUrl}`);
  }
}
