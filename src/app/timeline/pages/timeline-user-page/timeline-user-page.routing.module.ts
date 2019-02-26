import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineUserPageComponent } from './timeline-user-page.component';

const userRoutes: Routes = [

    {
        path: '',
        component: TimelineUserPageComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(userRoutes) ],
    exports: [ RouterModule ],
})
export class TimelineUserPageRoutingModule { }
