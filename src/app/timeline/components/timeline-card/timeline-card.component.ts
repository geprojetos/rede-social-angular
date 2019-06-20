import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TimelineCardInterface } from '../../interfaces/timeline-card/timeline-card-interface';
import { TimelineCardService } from '../../services/timeline-card/timeline-card.service';
import { UserService } from 'src/app/core/user/service/user.service';
import { loginInterface } from 'src/app/login/interfaces/login-interface';
import { MessageService } from 'src/app/shared/components/message/services/message.service';
import { ModalConfirmService } from 'src/app/shared/components/modals/modal-confirm/services/modal-confirm.service';

@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.css']
})
export class TimelineCardComponent implements OnInit {

  cards: TimelineCardInterface[] = [];
  filter: string;
  user: loginInterface;
  confirm: boolean = false;
  idCard: number;
  cardLikes: TimelineCardInterface;
  icon: string = 'fa-heart-o';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _timelineService: TimelineCardService,
    private _userService: UserService,
    private _messageService: MessageService,
    private _modalConfirmService: ModalConfirmService
  ) { }

  ngOnInit(): void {

    this._userService.isLogged() && this._userService.userDecodifyToken();
    this._userService.userObservable().subscribe(user => this.user = user)
    this._activatedRoute.params.subscribe(() => this.cards = this._activatedRoute.snapshot.data['cards']);
  };
 
  newListCards(newCards): void {

    this.cards = newCards;
  };

  confirmed(e) {
    
    if(!e) return;
    
    this._timelineService
      .remove(this.idCard)
      .subscribe(() => {
        
        this.cards.forEach((card, i) => {

          if(card.id === this.idCard) {
            this.cards.splice(i, 1);
          }      
        })

        this._messageService.info('Card removido');
        console.log(this.cards);
      }, erro => {
        console.log(erro);
        this._messageService.warning('Não foi possível remover o card, tente novamente');
      });
  };
  
  removeCard(id: number): void {
    
    this._modalConfirmService.toogleModal();
    this.idCard = id;
  };

  logicLike(card: TimelineCardInterface): void {

    this._timelineService
      .like(card.id)
      .subscribe(res => {

        if(!res) {
          console.log('Card já curtido pode você');
          return;
        }

        this._timelineService
          .listCardsById(card.id)
          .subscribe(res => {
            
            card.likes = res.likes
          }, erro => console.log(erro));
      }, erro => {
        console.log(erro);
      });
  };

  enjoying(card: TimelineCardInterface): void {

    this.logicLike(card);
  };

  postComment(e) {
    console.log(e);
  }
};
