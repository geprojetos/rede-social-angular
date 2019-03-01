import { Component, OnInit } from '@angular/core';
import { LoadingInterceptorService } from './services/loading-interceptor.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-loading-interceptor',
  templateUrl: './loading-interceptor.component.html',
  styleUrls: ['./loading-interceptor.component.css']
})
export class LoadingInterceptorComponent implements OnInit {

  loading$: Observable<string>;

  constructor(
    private _loadingService: LoadingInterceptorService
  ) { }

  ngOnInit() {

    this.loading$ = this._loadingService
      .getLoading()
      .pipe(map(loading => {

        console.log('chamou o loading interceptor');
        
        return loading.valueOf()}
      ))
  }

}
