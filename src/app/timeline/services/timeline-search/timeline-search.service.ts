import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TimelineSearchService {

  menu: boolean = false;
  menuSubject = new BehaviorSubject<boolean>(this.menu);
  
  constructor() { }

  toggleMenu() {

    this.menu = !this.menu;
    console.log(this.menu);
    this.menuSubject.next(this.menu);
  }

  menuObservable() {
    
    this.menuSubject.next(this.menu);
    return this.menuSubject.asObservable();
  }
}
