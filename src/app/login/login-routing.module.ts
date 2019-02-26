import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
