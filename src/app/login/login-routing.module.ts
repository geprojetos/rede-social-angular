import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const loginRoutes: Routes = [

    {
        path: '',
        component: LoginPageComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(loginRoutes) ],
    exports: [ RouterModule ],
})
export class LoginRoutingModule { }
