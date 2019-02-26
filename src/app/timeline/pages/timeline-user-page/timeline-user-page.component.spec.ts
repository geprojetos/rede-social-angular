import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineUserPageComponent } from './timeline-user-page.component';

describe('TimelineUserPageComponent', () => {
  let component: TimelineUserPageComponent;
  let fixture: ComponentFixture<TimelineUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
