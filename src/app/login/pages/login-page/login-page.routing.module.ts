import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page.component';
import { LoginGuard } from '../../guards/login-guard';

const loginRoutes: Routes = [
    
    {
        path: '',
        component: LoginPageComponent,
        canActivate: [
            LoginGuard
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(loginRoutes) ],
    exports: [ RouterModule ],
})
export class LoginPageRoutingModule { }
