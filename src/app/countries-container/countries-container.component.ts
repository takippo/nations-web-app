import { Component, OnInit } from '@angular/core';
import { Country } from '../interface/country';
import { CountryService } from '../service/country.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-countries-container',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './countries-container.component.html',
  styleUrl: './countries-container.component.css'
})
export class CountriesContainerComponent implements OnInit {
  countries: Country[];

  constructor(private countryService:CountryService){
    this.countries = [];
  }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data: Country[]) =>{  
			console.log(data);  
			this.countries = data;
    })
  }

}
