import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ModalConfirmService {

  modal: boolean = false;
  modalConfirmSubject = new BehaviorSubject<boolean>(this.modal);

  constructor() { }

  toogleModal(): void {
    this.modal = !this.modal;
    this.modalConfirmSubject.next(this.modal);
  };

  confirm(): void {
    this.modalConfirmSubject.next(this.modal);
    // return this.modal;
  };

  modalConfirmObservable(): Observable<boolean> {
    return this.modalConfirmSubject.asObservable();
  };
};
