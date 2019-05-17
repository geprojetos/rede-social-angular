import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MessageAplication, MessageType } from '../message';

@Injectable()
export class MessageService {

  messageSubject: BehaviorSubject<string> = new BehaviorSubject(null);
  messages: any = [];

  constructor() { }

  // message(message: string) {

  //   this.messages.push({success: message});
  //   new MessageAplication(message, MessageType.success);
  // };

  success(message: string) {

    new MessageAplication(message, MessageType.success);

    this.messages.push({success: message});
    this.messageSubject.next(this.messages);
  };

  info(message: string) {
    
    new MessageAplication(message, MessageType.info);

    this.messages.push({info: message});
    this.messageSubject.next(this.messages);
  };

  messageObservable() {
    return this.messageSubject.asObservable();
  }
}
