import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimelineCardService } from 'src/app/timeline/services/timeline-card/timeline-card.service';
import { UserService } from 'src/app/core/user/service/user.service';
import { TimelineCardInterface } from 'src/app/timeline/interfaces/timeline-card/timeline-card-interface';

@Component({
  selector: 'app-button-load-card',
  templateUrl: './button-load-card.component.html',
  styleUrls: ['./button-load-card.component.css']
})
export class ButtonLoadCardComponent implements OnInit {

  @Input() cards: TimelineCardInterface[];
  @Output() newList = new EventEmitter<TimelineCardInterface[]>();

  userName: string;
  page: number = 1;
  visible: boolean = true;

  constructor(
    private _cardService: TimelineCardService,
    private _userService: UserService
  ) { }

  ngOnInit() {

    if(this.cards.length < 10) {
      this.visible = false
    }
  };

  loadMore(e: Event) {

    e.preventDefault();

    this.userName = this._userService.userNameGet();

    this._cardService
      .listaCardsPagination(this.userName, ++this.page)
      .subscribe(cards => {

        this.cards = this.cards.concat(cards)
        this.newList.emit(this.cards)

        if(!cards.length) {

          this.visible = false;
        } 
        
      })
    
  }

}
