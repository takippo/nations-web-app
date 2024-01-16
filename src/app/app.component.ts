import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CountryService } from './service/country.service';
import { Country } from './interface/country';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'nation-app';

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
