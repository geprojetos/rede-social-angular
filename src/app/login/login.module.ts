import { NgModule } from '@angular/core';

import { LoginPageModule } from './pages/login-page/login-page.module';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    declarations: [],
    imports: [
        LoginPageModule,
        LoginRoutingModule
    ],
    exports: [
        LoginPageModule
    ],
    providers: [],
})
export class LoginModule { }
