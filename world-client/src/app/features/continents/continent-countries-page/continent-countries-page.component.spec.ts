import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentCountriesPageComponent } from './continent-countries-page.component';

describe('ContinentCountriesPageComponent', () => {
  let component: ContinentCountriesPageComponent;
  let fixture: ComponentFixture<ContinentCountriesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentCountriesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentCountriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
