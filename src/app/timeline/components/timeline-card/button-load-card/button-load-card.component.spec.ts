import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLoadCardComponent } from './button-load-card.component';

describe('ButtonLoadCardComponent', () => {
  let component: ButtonLoadCardComponent;
  let fixture: ComponentFixture<ButtonLoadCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonLoadCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLoadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
