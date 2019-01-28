import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomatUserComponent } from './nomat-user.component';

describe('NomatUserComponent', () => {
  let component: NomatUserComponent;
  let fixture: ComponentFixture<NomatUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomatUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomatUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
