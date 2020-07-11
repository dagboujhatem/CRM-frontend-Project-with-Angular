import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUSERComponent } from './list-user.component';

describe('ListUSERComponent', () => {
  let component: ListUSERComponent;
  let fixture: ComponentFixture<ListUSERComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUSERComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUSERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
