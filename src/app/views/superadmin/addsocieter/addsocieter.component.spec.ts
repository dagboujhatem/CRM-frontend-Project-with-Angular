import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsocieterComponent } from './addsocieter.component';

describe('AddsocieterComponent', () => {
  let component: AddsocieterComponent;
  let fixture: ComponentFixture<AddsocieterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsocieterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsocieterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
