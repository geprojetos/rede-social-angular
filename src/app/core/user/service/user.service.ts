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
  user: loginInterface;

  constructor(
    private _tokenService: TokenService
  ) { 

    // talves verificar e decodificar token aqui
  }

  userSetToken(token: string): void {

    this._tokenService.setToken(token);
    this.userDecodifyToken();
  };

  userDecodifyToken() { 

    const token = this._tokenService.getToken();
    const infoToken = jwt(token) as loginInterface;

    this.user = infoToken;
    this.userSubject.next(infoToken);
    console.log(infoToken);
    
  };

  userLogout() { 

    this._tokenService.removeToken();
    this.userSubject.next(null);
  };
}
