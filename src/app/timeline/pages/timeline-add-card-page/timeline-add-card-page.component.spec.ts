import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineAddCardPageComponent } from './timeline-add-card-page.component';

describe('TimelineAddCardPageComponent', () => {
  let component: TimelineAddCardPageComponent;
  let fixture: ComponentFixture<TimelineAddCardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineAddCardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineAddCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
