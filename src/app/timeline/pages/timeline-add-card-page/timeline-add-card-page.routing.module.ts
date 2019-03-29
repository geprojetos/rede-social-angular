import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimelineAddCardPageComponent } from './timeline-add-card-page.component';

const addCardRoutes: Routes = [
    
    {
        path: '',
        component: TimelineAddCardPageComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(addCardRoutes) ],
    exports: [ RouterModule ]
})
export class TimelineAddCardPageRoutingModule { }
