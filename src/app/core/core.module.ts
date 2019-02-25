import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './user/service/user.service';
import { TokenService } from '../shared/services/token-service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    TokenService,
    UserService
  ]
})
export class CoreModule { }
