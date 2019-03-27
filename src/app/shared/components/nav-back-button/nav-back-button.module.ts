import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBackButtonComponent } from './nav-back-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavBackButtonComponent
  ],
  exports: [
    NavBackButtonComponent
  ]
})
export class NavBackButtonModule { }
