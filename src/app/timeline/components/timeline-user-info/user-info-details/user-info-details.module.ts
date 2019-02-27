import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoDetailsComponent } from './user-info-details.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    UserInfoDetailsComponent
  ],
  exports: [
    UserInfoDetailsComponent
  ]
})
export class UserInfoDetailsModule { }
