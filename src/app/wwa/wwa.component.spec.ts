import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WwaComponent } from './wwa.component';

describe('WwaComponent', () => {
  let component: WwaComponent;
  let fixture: ComponentFixture<WwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
