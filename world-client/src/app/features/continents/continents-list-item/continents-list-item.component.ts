import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continents-list-item',
  templateUrl: './continents-list-item.component.html',
  styleUrls: ['./continents-list-item.component.less']
})
export class ContinentsListItemComponent implements OnInit {

  @Input() code: string;
  @Input() name: string;

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  continentPage(name: string, code: string) {
    localStorage.setItem("continentName", name);
    localStorage.setItem("continentCode", code);
    this.router.navigate(["/continentPage"]);
  }

}
