import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';
import { UserService } from 'src/app/core/user/service/user.service';

@Directive({
  selector: '[appLogged]'
})
export class LoggedDirective implements OnInit {

  constructor(
    private _userServive: UserService,
    private _el: ElementRef,
    private _renderer: Renderer
  ) { }

  ngOnInit() {

    if(!this._userServive.isLogged()) {

      this._renderer.setElementStyle(
        this._el.nativeElement,
        'display',
        'none'
      );
    }
  }
}
