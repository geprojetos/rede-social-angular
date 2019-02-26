import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginGuard } from './guards/login-guard';

const loginRoutes: Routes = [

    {
        path: '',
        loadChildren: './pages/login-page/login-page.module#LoginPageModule'
    }
];

@NgModule({
    imports: [ RouterModule.forChild(loginRoutes) ],
    exports: [ RouterModule ],
})
export class LoginRoutingModule { }
