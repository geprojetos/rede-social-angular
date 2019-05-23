import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TimelineCardInterface } from '../../interfaces/timeline-card/timeline-card-interface';
import { TimelineCardService } from '../../services/timeline-card/timeline-card.service';
import { UserService } from 'src/app/core/user/service/user.service';
import { loginInterface } from 'src/app/login/interfaces/login-interface';
import { MessageService } from 'src/app/shared/components/message/services/message.service';


@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.css']
})
export class TimelineCardComponent implements OnInit {

  cards: TimelineCardInterface[] = [];
  filter: string;
  user: loginInterface;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _timelineService: TimelineCardService,
    private _userService: UserService,
    private _messageService: MessageService
  ) { }

  ngOnInit(): void {

    this._userService.isLogged() && this._userService.userDecodifyToken();
    this._userService.userObservable().subscribe(user => this.user = user)
    this._activatedRoute.params.subscribe(() => this.cards = this._activatedRoute.snapshot.data['cards']);
    this._messageService.success('Success mensagem 1');
    this._messageService.info('Info menssagem 1');
    this._messageService.warning('Warning Message');
    this._messageService.danger('Danger mensagem')
  };
 
  newListCards(newCards): void {

    this.cards = newCards;
  };

  removeCard(id: number): void {

    this._timelineService
      .remove(id)
      .subscribe(() => {
        
        this.cards.forEach((card, i) => {

          if(card.id === id) {
            this.cards.splice(i, 1);
          }      
        })

        console.log(this.cards);
      }, erro => console.log(erro))
  }

}
