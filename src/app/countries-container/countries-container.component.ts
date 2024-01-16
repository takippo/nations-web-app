import { Component, OnInit } from '@angular/core';
import { Country } from '../interface/country';
import { CountryService } from '../service/country.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LanguageContainerComponent } from '../language-container/language-container.component';

@Component({
  selector: 'app-countries-container',
  standalone: true,
  imports: [CommonModule, LanguageContainerComponent, RouterLink],
  templateUrl: './countries-container.component.html',
  styleUrl: './countries-container.component.css'
})
export class CountriesContainerComponent implements OnInit {
  countries: Country[];

  constructor(private countryService:CountryService, private router: Router){
    this.countries = [];
  }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data: Country[]) =>{  
			console.log(data);  
			this.countries = data;
    })
  }

  goToPage(pageName: string):void {
    this.router.navigate(['${pageName}'])
  }

}
