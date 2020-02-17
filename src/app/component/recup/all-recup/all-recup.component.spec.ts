import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecupComponent } from './all-recup.component';

describe('AllRecupComponent', () => {
  let component: AllRecupComponent;
  let fixture: ComponentFixture<AllRecupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRecupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRecupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
