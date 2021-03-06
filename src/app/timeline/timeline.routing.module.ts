import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const timelineRoutes: Routes = [

    {
        path: '',
        loadChildren: './pages/timeline-base-page/timeline-base-page.module#TimelineBasePageModule'
    }
];

@NgModule({
    imports: [ RouterModule.forChild(timelineRoutes) ],
    exports: [ RouterModule ],
})
export class TimelineRoutingModule { }
