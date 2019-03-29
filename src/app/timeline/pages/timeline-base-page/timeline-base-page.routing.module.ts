import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimelineBasePageComponent } from './timeline-base-page.component';
import { TimelineCardResolve } from '../../resolvers/timeline-card/timeline-card.resolver';
import { TimelineCardComponent } from '../../components/timeline-card/timeline-card.component';

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
                loadChildren: '../timeline-user-page/timeline-user-page.module#TimelineUserPageModule'
            },
            {
                path: 'add',
                loadChildren: '../timeline-add-card-page/timeline-add-card-page.module#TimelineAddCardPageModule'
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(timelineBaseRoutes) ],
    exports: [ RouterModule ]
})
export class TimelineBasePageRoutingModule { }
