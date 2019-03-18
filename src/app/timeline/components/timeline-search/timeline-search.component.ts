import { Component, OnInit } from '@angular/core';

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

  constructor(
    private _searchService: TimelineSearchService
  ) { }

  ngOnInit() {

    this.menu$ = this._searchService.menuObservable();
    this.menu$.subscribe(res => {

      console.log(res);
      this.menuToggle = res;
    })
  }

  closeSearch(e: Event): void {

    e.preventDefault();
    this._searchService.toggleMenu();
  }

}
