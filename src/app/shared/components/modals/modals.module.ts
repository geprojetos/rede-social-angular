import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalConfirmModule } from './modal-confirm/modal-confirm.module';

@NgModule({
  imports: [
    CommonModule,
    ModalConfirmModule
  ],
  declarations: [],
  exports: [
    ModalConfirmModule
  ]
})
export class ModalsModule { }
