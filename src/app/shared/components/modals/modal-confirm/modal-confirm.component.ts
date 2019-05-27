import { Component, OnInit } from '@angular/core';

import { ModalConfirmService } from './services/modal-confirm.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {

  modal$: Observable<boolean>;
  modal: boolean = false;

  constructor(
    private _modalConfirmService: ModalConfirmService
  ) { }

  ngOnInit() { 

    this.modal$ = this._modalConfirmService.modalConfirmObservable();
    this.modal$.subscribe(res => {
      console.log(res);
      this.modal = res;  
    });
  };

  toogleModal(): void {
    this._modalConfirmService.toogleModal();
  };

}
