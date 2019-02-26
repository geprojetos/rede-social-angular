import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelinePageComponent } from './timeline-page.component';
import { TimelineMenuModule } from '../../components/timeline-menu/timeline-menu.module';

@NgModule({
  imports: [
    CommonModule,
    TimelineMenuModule
  ],
  declarations: [
    TimelinePageComponent
  ],
  exports: [
    TimelinePageComponent
  ]
})
export class TimelinePageModule { }
