import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsocieterComponent } from './listsocieter.component';

describe('ListsocieterComponent', () => {
  let component: ListsocieterComponent;
  let fixture: ComponentFixture<ListsocieterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsocieterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsocieterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
