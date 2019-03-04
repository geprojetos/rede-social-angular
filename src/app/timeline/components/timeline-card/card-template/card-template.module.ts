import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardTemplateComponent } from './card-template.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardTemplateComponent
  ],
  exports: [
    CardTemplateComponent
  ]
})
export class CardTemplateModule { }
