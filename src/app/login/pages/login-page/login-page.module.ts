import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './login-page.component';
import { LoginFormModule } from '../../components/login-form/login-form.module';

@NgModule({
  imports: [
    CommonModule,
    LoginFormModule
  ],
  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }
