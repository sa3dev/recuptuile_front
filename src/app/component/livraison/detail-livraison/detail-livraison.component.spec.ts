import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLivraisonComponent } from './detail-livraison.component';

describe('DetailLivraisonComponent', () => {
  let component: DetailLivraisonComponent;
  let fixture: ComponentFixture<DetailLivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
