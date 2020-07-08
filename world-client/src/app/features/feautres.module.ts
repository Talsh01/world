import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ContinentsListItemComponent } from './continents/continents-list-item/continents-list-item.component';
import { CountryCardComponent } from './continents/country-card/country-card.component';
import { ContinentsPageComponent } from './continents/continents-page/continents-page.component';
import { ContinentCountriesPageComponent } from './continents/continent-countries-page/continent-countries-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContinentsListItemComponent,
    CountryCardComponent,
    ContinentsPageComponent,
    ContinentCountriesPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeaturesModule { }
