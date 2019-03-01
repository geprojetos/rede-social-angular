import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { LoadingInterceptorService } from '../services/loading-interceptor.service';
import { Observable } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    
    constructor(
        private _loadingService: LoadingInterceptorService
    ) { }
    
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
        ): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        
        return next
            .handle(req)
            .pipe(tap(event => {

                if(event instanceof HttpResponse) {

                    this._loadingService.stop();
                } else{
                    this._loadingService.start();
                }
            }))
    }
}