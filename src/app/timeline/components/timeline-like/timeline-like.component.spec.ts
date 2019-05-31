import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineLikeComponent } from './timeline-like.component';

describe('TimelineLikeComponent', () => {
  let component: TimelineLikeComponent;
  let fixture: ComponentFixture<TimelineLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
