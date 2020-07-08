import { Component, OnInit } from '@angular/core';
import { Continent } from '../../../shared/models/continent.model';
import { WorldService } from 'src/app/core/services/world.service';

@Component({
  selector: 'app-continents-page',
  templateUrl: './continents-page.component.html',
  styleUrls: ['./continents-page.component.less']
})
export class ContinentsPageComponent implements OnInit {

  continents: Array<Continent>;

  constructor(private worldService: WorldService) { 
    localStorage.removeItem("continentName");
    localStorage.removeItem("continentCode");
    this.worldService.getContinents().then(res => this.continents = res);
  }
  ngOnInit(): void {
  }

}
