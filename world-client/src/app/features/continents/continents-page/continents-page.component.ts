import { Component, OnInit } from '@angular/core';
import { Continent } from '../../../shared/models/continent.model';

@Component({
  selector: 'app-continents-page',
  templateUrl: './continents-page.component.html',
  styleUrls: ['./continents-page.component.less']
})
export class ContinentsPageComponent implements OnInit {

  continents: Array<Continent>;

  constructor() { 
    localStorage.removeItem("continentName");
    // TODO: remove mock and get data from server
    this.continents = [
      { code: "AF", name: "Africa" },
      { code: "EU", name: "Europe" },
      { code: "AS", name: "Asia" }
    ];
  }
  ngOnInit(): void {
  }

}
