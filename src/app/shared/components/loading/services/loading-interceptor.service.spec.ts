import { TestBed, inject } from '@angular/core/testing';

import { LoadingInterceptorService } from './loading-interceptor.service';

describe('LoadingInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingInterceptorService]
    });
  });

  it('should be created', inject([LoadingInterceptorService], (service: LoadingInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
