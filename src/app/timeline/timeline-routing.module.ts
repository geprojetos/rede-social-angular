import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelinePageComponent } from './pages/timeline-page/timeline-page.component';

const timelineRoutes: Routes = [

    {
        path: '',
        component: TimelinePageComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(timelineRoutes) ],
    exports: [ RouterModule ],
})
export class TimelineRoutingModule { }
