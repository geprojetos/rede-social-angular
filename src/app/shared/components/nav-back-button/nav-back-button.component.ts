import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-back-button',
  templateUrl: './nav-back-button.component.html',
  styleUrls: ['./nav-back-button.component.css']
})
export class NavBackButtonComponent implements OnInit {

  @Input() title: string = '';
  @Input() navColor: string = 'bg-light'; 

  constructor(
    private _location: Location
  ) { }

  ngOnInit() {
  }

  goBack(e: Event) {

    e.preventDefault();
    this._location.back();
  };

}
