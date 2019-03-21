import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineCardNotfoundComponent } from './timeline-card-notfound.component';

describe('TimelineCardNotfoundComponent', () => {
  let component: TimelineCardNotfoundComponent;
  let fixture: ComponentFixture<TimelineCardNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineCardNotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineCardNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
