import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [

    {
        path: '',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: ':userName/timeline',
        loadChildren: './timeline/timeline.module#TimelineModule'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule { }
