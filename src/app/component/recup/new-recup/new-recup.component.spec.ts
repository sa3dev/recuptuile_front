import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecupComponent } from './new-recup.component';

describe('NewRecupComponent', () => {
  let component: NewRecupComponent;
  let fixture: ComponentFixture<NewRecupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRecupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
