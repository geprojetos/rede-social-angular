import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TimelineSearchService } from '../../services/timeline-search/timeline-search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timeline-search',
  templateUrl: './timeline-search.component.html',
  styleUrls: ['./timeline-search.component.css']
})
export class TimelineSearchComponent implements OnInit {

  menu$: Observable<boolean>;
  menuToggle: boolean;
  filter: string = '';

  @Output() sendFilter: EventEmitter<string> = new EventEmitter();

  constructor(
    private _searchService: TimelineSearchService
  ) { }

  ngOnInit(): void {

    this.menu$ = this._searchService.menuObservable();
    this.menu$.subscribe(res => this.menuToggle = res)
  };

  closeSearch(e: Event): void {

    e.preventDefault();
    this._searchService.toggleMenu();
  };

  handleSubmit(e: Event): void {

    e.preventDefault();
    this.sendFilter.emit(this.filter);
  };

}
