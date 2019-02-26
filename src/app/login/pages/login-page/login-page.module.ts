import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './login-page.component';
import { LoginFormModule } from '../../components/login-form/login-form.module';
import { LoginPageRoutingModule } from './login-page.routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoginFormModule,
    LoginPageRoutingModule
  ],
  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }
