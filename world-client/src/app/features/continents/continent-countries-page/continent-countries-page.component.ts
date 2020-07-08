import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/shared/models/country,model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continent-countries-page',
  templateUrl: './continent-countries-page.component.html',
  styleUrls: ['./continent-countries-page.component.less']
})
export class ContinentCountriesPageComponent implements OnInit {

  continentName: string;
  countries: Array<Country>;

  constructor(private router: Router) { 
    // TODO: remove mock and get data from server
    this.countries = [
      {code: "IL", name: "Israel", phone: "972", capital: "Capital1", currency: "$", languages: [{name: "HEB"}]},
      {code: "ES", name: "Spain", phone: "54", capital: "Capital1", currency: "$", languages: [{name: "HEB"}]},
      {code: "CL", name: "Chile", phone: "56", capital: "Capital1", currency: "$", languages: [{name: "HEB"}]},
      {code: "ZA", name: "South Africa", phone: "88", capital: "Capital1", currency: "$", languages: [{name: "HEB"}]},
      {code: "AA", name: "NonExisting", phone: "01", capital: "Capital1", currency: "$", languages: [{name: "HEB"}]},
      {code: "BB", name: "NonExisting", phone: "02", capital: "Capital1", currency: "$", languages: [{name: "HEB"}, {name:"ENG"}]}
    ];

    this.continentName = localStorage.getItem("continentName");

    // Get countries
  }

  ngOnInit(): void {
  }

  back() {
    localStorage.removeItem("continentName");
    this.router.navigate(["/"]);
  }

}
