import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [

    {
        path: '',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: ':userName/timeline',
        loadChildren: './timeline/pages/timeline-page/timeline-page.module#TimelinePageModule'
    },
    {
        path: ':userName/timeline/config',
        loadChildren: './timeline/pages/timeline-user-page/timeline-user-page.module#TimelineUserPageModule'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule { }
