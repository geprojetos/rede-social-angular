import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineUserInfoComponent } from './timeline-user-info.component';

describe('TimelineUserInfoComponent', () => {
  let component: TimelineUserInfoComponent;
  let fixture: ComponentFixture<TimelineUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
