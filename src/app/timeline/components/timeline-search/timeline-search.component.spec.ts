import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineSearchComponent } from './timeline-search.component';

describe('TimelineSearchComponent', () => {
  let component: TimelineSearchComponent;
  let fixture: ComponentFixture<TimelineSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
