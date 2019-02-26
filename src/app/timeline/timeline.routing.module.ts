import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const timelineRoutes: Routes = [

    {
        path: '',
        loadChildren: './pages/timeline-page/timeline-page.module#TimelinePageModule'
    },
    {
        path: 'user',
        loadChildren: './pages/timeline-user-page/timeline-user-page.module#TimelineUserPageModule'
    }
];

@NgModule({
    imports: [ RouterModule.forChild(timelineRoutes) ],
    exports: [ RouterModule ],
})
export class TimelineRoutingModule { }
