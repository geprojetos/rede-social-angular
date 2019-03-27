import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineBasePageComponent } from './timeline-base-page.component';

describe('TimelineBasePageComponent', () => {
  let component: TimelineBasePageComponent;
  let fixture: ComponentFixture<TimelineBasePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineBasePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineBasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
