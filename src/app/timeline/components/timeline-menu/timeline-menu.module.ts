import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineMenuComponent } from './timeline-menu.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  declarations: [
    TimelineMenuComponent
  ],
  exports: [
    TimelineMenuComponent
  ]
})
export class TimelineMenuModule { }
