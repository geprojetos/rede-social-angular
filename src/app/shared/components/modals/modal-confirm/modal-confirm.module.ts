import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalConfirmComponent } from './modal-confirm.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalConfirmComponent
  ],
  exports: [
    ModalConfirmComponent
  ]
})
export class ModalConfirmModule { }
