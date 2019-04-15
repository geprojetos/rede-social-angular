import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from 'src/app/core/user/service/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _userSerice: UserService,
        private _router: Router
    ) {};

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {

        if(!this._userSerice.isLogged()) {

            this._router.navigate(['']);
            return false;
        }
        return true;
    }
}