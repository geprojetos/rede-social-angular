import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingInterceptorComponent } from './loading-interceptor.component';
import { LoadingInterceptorService } from './services/loading-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './loading-interceptor/loading-interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingInterceptorComponent
  ],
  exports: [
    LoadingInterceptorComponent
  ],
  providers: [
    LoadingInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})
export class LoadingInterceptorModule { }
