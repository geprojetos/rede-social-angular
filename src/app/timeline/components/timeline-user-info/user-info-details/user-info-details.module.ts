import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoDetailsComponent } from './user-info-details.component';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule } from '@angular/router';
import { NavBackButtonModule } from 'src/app/shared/components/nav-back-button/nav-back-button.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    NavBackButtonModule
  ],
  declarations: [
    UserInfoDetailsComponent
  ],
  exports: [
    UserInfoDetailsComponent
  ]
})
export class UserInfoDetailsModule { }
