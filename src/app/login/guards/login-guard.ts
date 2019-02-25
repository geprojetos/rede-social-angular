import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/core/user/service/user.service';

@Injectable()
export class LoginGuard implements CanActivate {

    userName: string;

    constructor(
        private _userService: UserService,
        private _router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {

        
        if(this._userService.isLogged()) {

            this._router.navigate([this._userService.userGet(), 'timeline']);
            return false;
        }
        
        return true;
    }
}