import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageProduitComponent } from './affichage-produit.component';

describe('AffichageProduitComponent', () => {
  let component: AffichageProduitComponent;
  let fixture: ComponentFixture<AffichageProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
