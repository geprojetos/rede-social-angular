import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { MessageAplication, MessageType } from '../message';

@Injectable()
export class MessageService {

  messageSubject: BehaviorSubject<any[]> = new BehaviorSubject(null);
  messages: any = [];

  constructor() { }

  success(message: string): void {

    new MessageAplication(message, MessageType.success);

    this.messages = [{success: message}];
    this.messageSubject.next(this.messages);
  };

  info(message: string): void {
    
    new MessageAplication(message, MessageType.info);

    this.messages = [{info: message}];
    this.messageSubject.next(this.messages);
  };

  warning(message: string): void {

    new MessageAplication(message, MessageType.warning)

    this.messages = [{warning: message}];
    this.messageSubject.next(this.messages);
  };

  danger(message: string): void {

    new MessageAplication(message, MessageType.danger);

    this.messages = [{danger: message}];
    this.messageSubject.next(this.messages);
  };

  messageObservable(): Observable<any[]> {
    return this.messageSubject.asObservable();
  };
};
