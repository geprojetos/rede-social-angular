import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { ModalConfirmService } from './services/modal-confirm.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {

  @Input() title: string = '';
  @Input() description: string = '';
  @Output() confirmed = new EventEmitter<any>();

  modal$: Observable<boolean>;
  modal: boolean;

  constructor(
    private _modalConfirmService: ModalConfirmService
  ) { }

  ngOnInit() { 

    this.modal$ = this._modalConfirmService.modalConfirmObservable();
    this.modal$.subscribe(res => this.modal = res);
  };

  toogleModal(): void {
    this._modalConfirmService.toogleModal();
  };
  
  confirm() {

    this._modalConfirmService.confirm();
    this.confirmed.emit(this.modal);
    this._modalConfirmService.toogleModal();
  };
}
