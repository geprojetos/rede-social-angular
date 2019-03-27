import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/core/user/service/user.service';
import { TimelineSearchService } from '../../services/timeline-search/timeline-search.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-timeline-menu',
  templateUrl: './timeline-menu.component.html',
  styleUrls: ['./timeline-menu.component.css']
})
export class TimelineMenuComponent implements OnInit {

  userName: string;
  logged: boolean = false;
  userRoute: string;

  constructor(
    private _userService: UserService,
    private _searchService: TimelineSearchService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    
    this.userName = this._userService.userNameGet();
    this._activatedRoute.params.subscribe(params => this.userRoute = params.userName);

    if(this._userService.isLogged()) {
      this.logged = true;
    } else {
      this.logged = false;
    }
  };

  openSearch(e: Event) {

    e.preventDefault();
    
    this._router.navigate(['/', this.userRoute, 'timeline'])    
    this._searchService.toggleMenu()
  }

}
