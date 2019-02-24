import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { loginInterface } from '../interfaces/login-interface';

const api = environment.development;

@Injectable()
export class LoginService {

    constructor(
        private _http: HttpClient
    ) { }

    login(userName: string, password: number): Observable<loginInterface> {

        return this._http
            .post<loginInterface>(api + '/user/login', { userName, password })
    }
}