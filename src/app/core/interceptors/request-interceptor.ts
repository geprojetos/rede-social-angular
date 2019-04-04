import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenService } from 'src/app/shared/services/token-service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    
    constructor(
        private _tokenService: TokenService
    ) { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        console.log(next);
        
        const token = this._tokenService.getToken();
        
        if(this._tokenService.hasToken()) {

            req = req.clone({
                setHeaders: {
                    'x-access-token': token
                }
            })
        }
        return next.handle(req);
    }
}