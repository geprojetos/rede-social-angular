import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineAddCardPageComponent } from './timeline-add-card-page.component';
import { TimelineAddCardPageRoutingModule } from './timeline-add-card-page.routing.module';
import { NavBackButtonModule } from 'src/app/shared/components/nav-back-button/nav-back-button.module';

@NgModule({
  imports: [
    CommonModule,
    NavBackButtonModule,
    TimelineAddCardPageRoutingModule
  ],
  declarations: [
    TimelineAddCardPageComponent
  ],
  exports: [
    TimelineAddCardPageComponent
  ]
})
export class TimelineAddCardPageModule { }
