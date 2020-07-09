import { Component, OnInit, Input } from '@angular/core';

const COUNTRY_FLAGS_URL = 'https://www.countryflags.io/';
const DEFAULT_FLAG = 'https://img.icons8.com/windows/64/000000/questions.png';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.less']
})
export class CountryCardComponent implements OnInit {

  @Input() code: string;
  @Input() name: string;
  @Input() phone: string;
  @Input() capital: string;
  @Input() currency: string;
  @Input() languages: string;
  languegesDisplayString: string;

  flagUrl: string;
  
  constructor() {
    
  }

  ngOnInit(): void {
    this.flagUrl = `${COUNTRY_FLAGS_URL}/${this.code}/shiny/64.png`;
  }

  imgNotFound(event) {
    event.target.src = DEFAULT_FLAG;
  }

}
