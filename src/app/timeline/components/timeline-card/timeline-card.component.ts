import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TimelineCardInterface } from '../../interfaces/timeline-card/timeline-card-interface';
import { TimelineSearchService } from '../../services/timeline-search/timeline-search.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.css']
})
export class TimelineCardComponent implements OnInit {

  cards: TimelineCardInterface[] = [];
  menu$: Observable<boolean>;
  show: boolean;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _searchService: TimelineSearchService
  ) { }

  ngOnInit() {

    this._activatedRoute.params.subscribe(() => this.cards = this._activatedRoute.snapshot.data['cards']);

    this.menu$ = this._searchService.menuObservable();

    this.menu$.subscribe(res => {
      console.log('recebendo do servico');
      this.show = res;
      console.log(this.show);
    })
  };
 

  

  newListCards(newCards) {

    this.cards = newCards;
  };

 

}
