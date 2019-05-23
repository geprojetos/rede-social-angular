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
  show: string = '';

  constructor(
    private _messageService: MessageService
  ) { }

  ngOnInit() {
    
      this.message$ = this._messageService.messageObservable();
      this.message$.subscribe(res => {
        
        if(res) {
          this.messages = res;
          this.show = 'message-show';
          setTimeout(() => this.show = 'message-hide', this.timeout);
        };
  
      }, erro => console.log(erro))
  };
};
