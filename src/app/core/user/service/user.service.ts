import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/shared/services/token-service';

import * as jwt from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { loginInterface } from 'src/app/login/interfaces/login-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSubject = new BehaviorSubject<loginInterface>(null);
  userName: string;

  constructor(
    private _tokenService: TokenService
  ) { 

    this._tokenService.hasToken() && this.userDecodifyToken()
  }

  userSetToken(token: string): void {

    this._tokenService.setToken(token);
    this.userDecodifyToken();
  };

  userDecodifyToken() { 

    const token = this._tokenService.getToken();
    const infoToken = jwt(token) as loginInterface;

    this.userName = infoToken.name;
    this.userSubject.next(infoToken);
  };

  userLogout() { 

    this._tokenService.removeToken();
    this.userSubject.next(null);
  };

  userObservable() {
    return this.userSubject.asObservable();
  }

  userNameGet(): string {
    
    return this.userName;
  };

  isLogged() {

    return this._tokenService.hasToken();
  };
}
