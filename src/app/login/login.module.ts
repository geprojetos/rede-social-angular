import { NgModule } from '@angular/core';

import { LoginPageModule } from './pages/login-page/login-page.module';
import { LoginRoutingModule } from './login-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [],
    imports: [
        LoginPageModule,
        CoreModule,
        LoginRoutingModule
    ],
    exports: [
        LoginPageModule
    ],
    providers: [],
})
export class LoginModule { }
