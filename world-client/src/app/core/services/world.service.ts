import { Injectable } from '@angular/core';
import { NgxConfigureService } from 'ngx-configure';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  constructor(private configService: NgxConfigureService,
              private httpClient: HttpClient) { }

  public async getContinents() {
    const url = this.configService.config.api + this.configService.config.getContinentsPath;
    return await this.httpClient.get(url).toPromise();
  }

  public async getCountries(continentCode: string) {
    const url = this.configService.config.api + this.configService.config.getCountriesPath;
    return await this.httpClient.post(url, {
      continentcode: continentCode 
    }).toPromise();
  }
}
