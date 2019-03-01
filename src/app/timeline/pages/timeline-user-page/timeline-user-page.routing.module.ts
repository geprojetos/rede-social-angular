import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineUserPageComponent } from './timeline-user-page.component';
import { TimelineUserInfoGuard } from '../../guards/timeline-user-info.guard';

const userRoutes: Routes = [

    {
        path: '',
        component: TimelineUserPageComponent,
        canActivate: [
            TimelineUserInfoGuard
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(userRoutes) ],
    exports: [ RouterModule ],
})
export class TimelineUserPageRoutingModule { }
