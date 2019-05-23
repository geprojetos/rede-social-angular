import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from './services/message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() timeout = 4000;

  message$: Observable<any[]>;
  messages: any[] = [];

  constructor(
    private _messageService: MessageService
  ) { }

  ngOnInit() {
    
    this.message$ = this._messageService.messageObservable();
    this.message$.subscribe(res => {
      
      console.log(res);
      this.messages = res;

      setTimeout(() => this.clearMessage(res), this.timeout);

    }, erro => console.log(erro))
  };
  
  clearMessage(message) {
    
    this.messages = this.messages.filter(data => message == data);
  };
};
