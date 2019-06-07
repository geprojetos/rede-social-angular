import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedDirective } from './logged.directive';
import { UserService } from 'src/app/core/user/service/user.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoggedDirective
  ],
  exports: [
    LoggedDirective
  ],
  providers: [
    UserService
  ]
})
export class LoggedModule { }
