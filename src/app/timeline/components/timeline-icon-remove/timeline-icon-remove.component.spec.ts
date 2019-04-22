import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineIconRemoveComponent } from './timeline-icon-remove.component';

describe('TimelineIconRemoveComponent', () => {
  let component: TimelineIconRemoveComponent;
  let fixture: ComponentFixture<TimelineIconRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineIconRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineIconRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
