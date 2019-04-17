import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { TimelineCardInterface } from '../../interfaces/timeline-card/timeline-card-interface';
import { UserService } from 'src/app/core/user/service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timeline-card-notfound',
  templateUrl: './timeline-card-notfound.component.html',
  styleUrls: ['./timeline-card-notfound.component.css']
})
export class TimelineCardNotfoundComponent implements OnInit, OnChanges {

  @Input() cards: TimelineCardInterface[] = [];
  @Input() filter: string = '';
  @Output() cardsBeforeSearch = new EventEmitter<any>();

  cardsCopy: TimelineCardInterface[] = [];
  cardNotFound: boolean = false;
  cardFound: boolean = false;
  messageNoCards: boolean = false;
  userName: string;
  paramsUserName: string;
  notUserOwner: boolean = false;

  constructor(
    private _userService: UserService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void { 

    this.cardsCopy = this.cards;
    this.userName = this._userService.userNameGet();
    this._activatedRoute.params.subscribe(params => this.paramsUserName = params.userName);

    this.notHaveCardIsNotOwner();
  };

  verifyCardNotFound(): void {

    if(this.filter && !this.cards.length) {
    
      this.cardNotFound = true;
      this.cardFound = false;
      return;
    } else {
      this.cardNotFound = false;
    };
  };

  verifyCardFound(): void {

    if(this.filter && this.cards.length) {
    
      this.cardFound = true;
      this.cardNotFound = false;
      return;
    };
  };

  notHaveCardAdd(): void {
    
    if(!this.filter && !this.cards.length && this.userName == this.paramsUserName) {
      
      this.messageNoCards = true;
      this.notUserOwner = false;
      return;
    } else {
      this.messageNoCards = false;
    }
  };

  notHaveCardIsNotOwner(): void {

    if(!this.cards.length && this.userName !== this.paramsUserName) {

      this.notUserOwner = true;
      this.messageNoCards = false;
      return;
    } else {
      this.notUserOwner = false;
    }
  };

  ngOnChanges(): void {
    
    this.verifyCardNotFound();
    this.verifyCardFound();
    this.notHaveCardAdd();
    this.notHaveCardIsNotOwner();
  };

  clearSearch(): void {

    this.cardFound = false;
    this.filter = '';
    this.cardsBeforeSearch.emit({cards: this.cardsCopy, filter: this.filter});
  }

}
