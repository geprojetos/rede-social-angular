import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineCommentsFormComponent } from './timeline-comments-form.component';

describe('TimelineCommentsFormComponent', () => {
  let component: TimelineCommentsFormComponent;
  let fixture: ComponentFixture<TimelineCommentsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineCommentsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineCommentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
