import { Component } from '@angular/core';
import { Country } from '../interface/country';
import { CountryService } from '../service/country.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-stats-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-stats-container.component.html',
  styleUrl: './country-stats-container.component.css'
})
export class CountryStatsContainerComponent {
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
