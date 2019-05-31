import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineLikeComponent } from './timeline-like.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimelineLikeComponent
  ],
  exports:[
    TimelineLikeComponent
  ]
})
export class TimelineLikeModule { }
