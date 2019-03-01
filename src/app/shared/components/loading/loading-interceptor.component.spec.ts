import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingInterceptorComponent } from './loading-interceptor.component';

describe('LoadingInterceptorComponent', () => {
  let component: LoadingInterceptorComponent;
  let fixture: ComponentFixture<LoadingInterceptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingInterceptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
