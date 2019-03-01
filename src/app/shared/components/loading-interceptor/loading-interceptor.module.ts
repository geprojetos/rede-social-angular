import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingInterceptorComponent } from './loading-interceptor.component';
import { LoadingInterceptorService } from './services/loading-interceptor.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    
  ],
  exports: [
    LoadingInterceptorComponent
  ],
  providers: [
    LoadingInterceptorService
  ]
})
export class LoadingInterceptorModule { }
