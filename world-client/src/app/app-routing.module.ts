import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContinentsPageComponent } from './features/continents/continents-page/continents-page.component';
import { ContinentCountriesPageComponent } from './features/continents/continent-countries-page/continent-countries-page.component';
import { ContinentPageGuard } from './core/guards/continentPage.guard';

const routes: Routes = [
  { path: '', component: ContinentsPageComponent },
  { path: 'continentPage', component: ContinentCountriesPageComponent, canActivate: [ContinentPageGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
