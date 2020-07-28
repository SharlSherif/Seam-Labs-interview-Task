import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WwoComponent } from './wwo.component';

describe('WwoComponent', () => {
  let component: WwoComponent;
  let fixture: ComponentFixture<WwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
