import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimelineBasePageComponent } from './timeline-base-page.component';
import { TimelineCardResolve } from '../../resolvers/timeline-card/timeline-card.resolver';
import { TimelineCardComponent } from '../../components/timeline-card/timeline-card.component';
import { TimelineUserInfoComponent } from '../../components/timeline-user-info/timeline-user-info.component';

const timelineBaseRoutes: Routes = [

    {
        path: '',
        component: TimelineBasePageComponent,
        children: [
            {
                path: '',
                component: TimelineCardComponent,
                resolve: {
                    cards: TimelineCardResolve
                }
            },
            {
                path: 'user',
                component: TimelineUserInfoComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(timelineBaseRoutes) ],
    exports: [ RouterModule ]
})
export class TimelineBasePageRoutingModule { }
