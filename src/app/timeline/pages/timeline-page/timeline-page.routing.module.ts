import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelinePageComponent } from './timeline-page.component';
import { TimelineCardResolve } from '../../resolvers/timeline-card/timeline-card.resolver';

const timelineRoutes: Routes = [

    {
        path: '',
        component: TimelinePageComponent,
        resolve: {
            cards: TimelineCardResolve
        }
    }
];

@NgModule({
    imports: [ RouterModule.forChild(timelineRoutes) ],
    exports: [ RouterModule ],
})
export class TimelinePageRoutingModule { }
