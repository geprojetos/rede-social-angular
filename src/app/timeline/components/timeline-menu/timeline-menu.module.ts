import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TimelineMenuComponent } from './timeline-menu.component';
import { CoreModule } from 'src/app/core/core.module';
import { TimelineSearchService } from '../../services/timeline-search/timeline-search.service';

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
  ],
  providers: [
    TimelineSearchService
  ]
})
export class TimelineMenuModule { }
