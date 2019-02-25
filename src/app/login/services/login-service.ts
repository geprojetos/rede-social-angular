import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { loginInterface } from '../interfaces/login-interface';
import { UserService } from 'src/app/core/user/service/user.service';

const api = environment.development;

@Injectable()
export class LoginService {

    constructor(
        private _http: HttpClient,
        private _userService: UserService
    ) { }

    login(userName: string, password: string): Observable<HttpResponse<loginInterface>>  {

        return this._http
            .post<loginInterface>(
                api + '/user/login', 
                { userName, password }, 
                { observe: 'response' }
            )
            .pipe(tap(res => {
                
                const token = res.headers.get('x-access-token');
                this._userService.userSetToken(token);
            }))
    }
}