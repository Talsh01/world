import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentsPageComponent } from './continents-page.component';

describe('ContinentsPageComponent', () => {
  let component: ContinentsPageComponent;
  let fixture: ComponentFixture<ContinentsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
