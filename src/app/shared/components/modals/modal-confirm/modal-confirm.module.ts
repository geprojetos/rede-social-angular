import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalConfirmComponent } from './modal-confirm.component';
import { ModalConfirmService } from './services/modal-confirm.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalConfirmComponent
  ],
  exports: [
    ModalConfirmComponent
  ],
  providers: [
    ModalConfirmService
  ]
})
export class ModalConfirmModule { }
