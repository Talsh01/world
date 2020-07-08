import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/shared/models/country,model';
import { Router } from '@angular/router';
import { WorldService } from 'src/app/core/services/world.service';

@Component({
  selector: 'app-continent-countries-page',
  templateUrl: './continent-countries-page.component.html',
  styleUrls: ['./continent-countries-page.component.less']
})
export class ContinentCountriesPageComponent implements OnInit {

  continentName: string;
  continentCode: string;
  countries: Array<Country>;

  constructor(private router: Router,
    private worldService: WorldService) { 
      
      this.continentName = localStorage.getItem("continentName");
      this.continentCode = localStorage.getItem("continentCode");
      this.worldService.getCountries(this.continentCode).then(res => this.countries = res);
  }

  ngOnInit(): void {
  }

  back() {
    localStorage.removeItem("continentName");
    localStorage.removeItem("continentCode");
    this.router.navigate(["/"]);
  }

}
