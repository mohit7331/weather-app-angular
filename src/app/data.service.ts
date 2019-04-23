import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getData(cityName:string){
    return this.http.get(`https://api.apixu.com/v1/forecast.json?key=8fb3cb1787b040748f9133348191904&q=${cityName}&days=7`);
  }
}
