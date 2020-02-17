import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecupComponent } from './recup.component';

describe('RecupComponent', () => {
  let component: RecupComponent;
  let fixture: ComponentFixture<RecupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
