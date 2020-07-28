import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCardLgComponent } from './pricing-card-lg.component';

describe('PricingCardLgComponent', () => {
  let component: PricingCardLgComponent;
  let fixture: ComponentFixture<PricingCardLgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingCardLgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingCardLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
