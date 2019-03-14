import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/core/user/service/user.service';
import { TimelineSearchService } from '../../services/timeline-search/timeline-search.service';

@Component({
  selector: 'app-timeline-menu',
  templateUrl: './timeline-menu.component.html',
  styleUrls: ['./timeline-menu.component.css']
})
export class TimelineMenuComponent implements OnInit {

  userName: string;
  logged: boolean = false;
  

  constructor(
    private _userService: UserService,
    private _searchService: TimelineSearchService
  ) { }

  ngOnInit() {
    
    this.userName = this._userService.userNameGet();

    if(this._userService.isLogged()) {
      this.logged = true;
    } else {
      this.logged = false;
    }
  };

  openSearch(e: Event) {

    e.preventDefault();
    this._searchService.toggleMenu()
  }

}
