import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBackButtonComponent } from './nav-back-button.component';

describe('NavBackButtonComponent', () => {
  let component: NavBackButtonComponent;
  let fixture: ComponentFixture<NavBackButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBackButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
