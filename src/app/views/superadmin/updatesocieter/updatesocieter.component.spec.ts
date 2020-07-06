import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesocieterComponent } from './updatesocieter.component';

describe('UpdatesocieterComponent', () => {
  let component: UpdatesocieterComponent;
  let fixture: ComponentFixture<UpdatesocieterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesocieterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesocieterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
