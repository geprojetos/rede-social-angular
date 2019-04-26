import { Directive, OnInit, Input, ElementRef, Renderer } from '@angular/core';

import { TimelineCardInterface } from 'src/app/timeline/interfaces/timeline-card/timeline-card-interface';
import { loginInterface } from 'src/app/login/interfaces/login-interface';

@Directive({
  selector: '[appOwnerDirective]'
})
export class OwnerDirective implements OnInit {

  @Input() card: TimelineCardInterface;
  @Input() user: loginInterface;

  constructor(
    private _el: ElementRef<any>,
    private _renderer: Renderer
  ) { }

  ngOnInit() {
    
    if(!this.user || this.user.id != this.card.userId) {

      this._renderer.setElementStyle(
        this._el.nativeElement,
        'display',
        'none'
      )
    }
  }
}
