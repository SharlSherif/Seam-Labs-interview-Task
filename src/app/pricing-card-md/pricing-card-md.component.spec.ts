import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCardMdComponent } from './pricing-card-md.component';

describe('PricingCardMdComponent', () => {
  let component: PricingCardMdComponent;
  let fixture: ComponentFixture<PricingCardMdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingCardMdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingCardMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
