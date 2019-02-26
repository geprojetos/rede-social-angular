import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/core/user/service/user.service';

@Component({
  selector: 'app-timeline-menu',
  templateUrl: './timeline-menu.component.html',
  styleUrls: ['./timeline-menu.component.css']
})
export class TimelineMenuComponent implements OnInit {

  userName: string;

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    
    this.userName = this._userService.userGet();
  }

}
