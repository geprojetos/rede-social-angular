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

  message$: Observable<string>;
  messages: string;

  constructor(
    private _messageService: MessageService
  ) { }

  ngOnInit() {
    console.log('ok');
    
    this.message$ = this._messageService.messageObservable();
    this.message$.subscribe(res => {
      
      console.log(res);
      this.messages = res;

      setTimeout(() => this.clearMessage(res), this.timeout);

    }, erro => console.log(erro))
  };
  
  clearMessage(message) {
    console.log('apgar a mensagem');
    console.log(message);
  }
}
