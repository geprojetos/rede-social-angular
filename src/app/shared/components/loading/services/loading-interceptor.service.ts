import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingType } from '../loading-type';
import { startWith } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptorService {

  loadingSubject = new Subject<LoadingType>();

  constructor() { }

  getLoading() {
    return this.loadingSubject
      .asObservable()
      .pipe(startWith(LoadingType.stopped))
  };

  start() {
    this.loadingSubject.next(LoadingType.loading)
  };

  stop() {
    this.loadingSubject.next(LoadingType.stopped)
  };
}
