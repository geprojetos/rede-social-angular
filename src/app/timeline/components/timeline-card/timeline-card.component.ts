import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TimelineCardInterface } from '../../interfaces/timeline-card/timeline-card-interface';
import { TimelineCardService } from '../../services/timeline-card/timeline-card.service';


@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.css']
})
export class TimelineCardComponent implements OnInit {

  cards: TimelineCardInterface[] = [];
  filter: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _timelineService: TimelineCardService
  ) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(() => this.cards = this._activatedRoute.snapshot.data['cards']);
  };
 
  newListCards(newCards): void {

    this.cards = newCards;
  };

  removeCard() {

    this._timelineService.remove();
  }

}
