import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecupDetailComponent } from './recup-detail.component';

describe('RecupDetailComponent', () => {
  let component: RecupDetailComponent;
  let fixture: ComponentFixture<RecupDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecupDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
