import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLivraisonComponent } from './all-livraison.component';

describe('AllLivraisonComponent', () => {
  let component: AllLivraisonComponent;
  let fixture: ComponentFixture<AllLivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
