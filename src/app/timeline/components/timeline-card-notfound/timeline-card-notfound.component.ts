import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { TimelineCardInterface } from '../../interfaces/timeline-card/timeline-card-interface';

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

  constructor() { }

  ngOnInit(): void { 

    this.cardsCopy = this.cards;
  };

  ngOnChanges(): void {
    
    if(this.filter && !this.cards.length) {
    
      this.cardNotFound = true;
      this.cardFound = false;
      return;
    } else {
      this.cardNotFound = false;
    }

    if(this.filter && this.cards.length) {
    
      this.cardFound = true;
      this.cardNotFound = false;
      return;
    }
  };

  clearSearch(): void {

    this.cardFound = false;
    this.filter = '';
    this.cardsBeforeSearch.emit({cards: this.cardsCopy, filter: this.filter});
  }

}
