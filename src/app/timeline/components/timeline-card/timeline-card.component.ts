import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TimelineCardInterface } from '../../interfaces/timeline-card/timeline-card-interface';


@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.css']
})
export class TimelineCardComponent implements OnInit {

  @Input() cards: TimelineCardInterface[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe(() => this.cards = this._activatedRoute.snapshot.data['cards']);
  };

  newListCards(e) {

    console.log('recebendo nova lista');
    
    console.log(e);
    
  }

}
