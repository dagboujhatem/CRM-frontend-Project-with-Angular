import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsuperadminComponent } from './settingsuperadmin.component';

describe('SettingsuperadminComponent', () => {
  let component: SettingsuperadminComponent;
  let fixture: ComponentFixture<SettingsuperadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsuperadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
