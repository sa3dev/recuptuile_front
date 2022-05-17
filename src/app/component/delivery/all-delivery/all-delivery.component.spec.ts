import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDeliveryComponent } from './all-delivery.component';

describe('AllDeliveryComponent', () => {
  let component: AllDeliveryComponent;
  let fixture: ComponentFixture<AllDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
