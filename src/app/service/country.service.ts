import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interface/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }

  getCountries(): any {
    return this.http.get<Country>(`http://localhost:8080/api/v1/countries`);
  }
}
