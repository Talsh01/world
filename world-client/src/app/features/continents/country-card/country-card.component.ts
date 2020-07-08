import { Component, OnInit, Input } from '@angular/core';
import { Language } from 'src/app/shared/models/country,model';

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
  @Input() languages: Array<Language>;
  languegesDisplayString: string;

  flagUrl: string;
  
  constructor() {
    
  }

  ngOnInit(): void {
    this.flagUrl = `${COUNTRY_FLAGS_URL}/${this.code}/shiny/64.png`;
    this.languegesDisplayString = this.languages.map(x => x.name).join(', ');
  }

  imgNotFound(event) {
    event.target.src = DEFAULT_FLAG;
  }

}
