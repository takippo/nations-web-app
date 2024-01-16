import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CountriesContainerComponent } from './countries-container/countries-container.component';
import { CountryStatsContainerComponent } from './country-stats-container/country-stats-container.component';
import { InfoContainerComponent } from './info-container/info-container.component';

export const routes: Routes = [  
{ path: '', redirectTo: '/countries', pathMatch: 'full' },
{ path: 'countries', component: CountriesContainerComponent },
{ path: 'stats', component: CountryStatsContainerComponent },
{ path: 'info', component: InfoContainerComponent }];
