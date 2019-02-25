import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form.component';
import { LoginService } from '../../services/login-service';
import { LoginGuard } from '../../guards/login-guard';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, 
    RouterModule
  ],
  declarations: [
    LoginFormComponent
  ],
  exports: [
    LoginFormComponent
  ],
  providers: [
    LoginService,
    LoginGuard
  ]
})
export class LoginFormModule { }
