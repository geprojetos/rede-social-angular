import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/service/user.service';
import { Observable } from 'rxjs';
import { loginInterface } from 'src/app/login/interfaces/login-interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-info-details',
  templateUrl: './user-info-details.component.html',
  styleUrls: ['./user-info-details.component.css']
})
export class UserInfoDetailsComponent implements OnInit {

  user$: Observable<loginInterface>;
  userName: string;

  constructor(
    private _userService: UserService,
    private _location: Location
  ) { }

  ngOnInit() {

    this._userService.isLogged() && this._userService.userDecodifyToken();

    this.user$ = this._userService.userObservable();
    
    this.userName = this._userService.userNameGet();
  };

  goBack(e: Event) {

    e.preventDefault();
    this._location.back();
  }

}
