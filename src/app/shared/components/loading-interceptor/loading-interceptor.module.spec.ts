import { LoadingInterceptorModule } from './loading-interceptor.module';

describe('LoadingInterceptorModule', () => {
  let loadingInterceptorModule: LoadingInterceptorModule;

  beforeEach(() => {
    loadingInterceptorModule = new LoadingInterceptorModule();
  });

  it('should create an instance', () => {
    expect(loadingInterceptorModule).toBeTruthy();
  });
});
