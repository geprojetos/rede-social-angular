import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message.component';
import { MessageService } from './services/message.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageComponent
  ],
  exports: [
    MessageComponent
  ],
  providers: [
    MessageService
  ]
})
export class MessageModule { }
