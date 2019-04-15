import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimelineAddCardPageComponent } from './timeline-add-card-page.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const addCardRoutes: Routes = [
    
    {
        path: '',
        component: TimelineAddCardPageComponent,
        canActivate: [ AuthGuard ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(addCardRoutes) ],
    exports: [ RouterModule ]
})
export class TimelineAddCardPageRoutingModule { }
