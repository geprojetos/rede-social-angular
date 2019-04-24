import { Directive, OnInit, Input, ElementRef, Renderer } from '@angular/core';

import { TimelineCardInterface } from 'src/app/timeline/interfaces/timeline-card/timeline-card-interface';
import { UserService } from 'src/app/core/user/service/user.service';

@Directive({
  selector: '[appOwnerDirective]'
})
export class OwnerDirective implements OnInit {

  @Input() card: TimelineCardInterface;

  constructor(
    private _userService: UserService,
    private _el: ElementRef<any>,
    private _renderer: Renderer
  ) { }

  ngOnInit() {
    
    if(this.card.userId) {

      this._userService
        .userObservable()
        .subscribe(user => {
  
          if(!user || user.id != this.card.userId) {
  
            this._renderer.setElementStyle(
              this._el.nativeElement,
              'display',
              'none'
            )
            return;
          }          
        }, erro => console.log(erro))
    }
  }
}
