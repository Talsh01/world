import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentsListItemComponent } from './continents-list-item.component';

describe('ContinentsListComponent', () => {
  let component: ContinentsListItemComponent;
  let fixture: ComponentFixture<ContinentsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
