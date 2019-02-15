import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaPrintComponent } from './ta-print.component';

describe('TaPrintComponent', () => {
  let component: TaPrintComponent;
  let fixture: ComponentFixture<TaPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
