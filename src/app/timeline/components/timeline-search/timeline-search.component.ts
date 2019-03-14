import { Component, OnInit } from '@angular/core';

import { TimelineSearchService } from '../../services/timeline-search/timeline-search.service';

@Component({
  selector: 'app-timeline-search',
  templateUrl: './timeline-search.component.html',
  styleUrls: ['./timeline-search.component.css']
})
export class TimelineSearchComponent implements OnInit {

  constructor(
    private _searchService: TimelineSearchService
  ) { }

  ngOnInit() {
  }

  closeSearch(e: Event) {

    e.preventDefault();
    this._searchService.toggleMenu();
  }

}
