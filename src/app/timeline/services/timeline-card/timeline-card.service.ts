import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpEvent } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { TimelineCardInterface } from '../../interfaces/timeline-card/timeline-card-interface';
import { map, catchError } from 'rxjs/operators';

const api = environment.development;

@Injectable()
export class TimelineCardService {

  constructor(
    private _http: HttpClient
  ) { }

  listCards(userName: string): Observable<TimelineCardInterface[]> {

    return this._http
      .get<TimelineCardInterface[]>(`${ api }/${ userName }/photos`)
  };

  listaCardsPagination(userName: string, page: number): Observable<TimelineCardInterface[]> {

    const pageParam = new HttpParams().append('page', page.toString())

    return this._http
      .get<TimelineCardInterface[]>(
            `${ api }/${ userName }/photos`,
            { params: pageParam }
          )
  };

  upload(file: File, description: string, allowComments: boolean): Observable<HttpEvent<Object>> {

    let formData = new FormData();

    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this._http
      .post(
        `${ api }/photos/upload`, 
        formData,
        {
          observe: 'events',
          reportProgress: true
        }
      )
  };

  remove(id: number): Observable<Object> {

    return this._http
      .delete(`${ api }/photos/${ id }`);
  };

  like(id: number) {
    return this._http
      .post(`
          ${ api }/photos/${ id }/like`
          ,{}
          ,{ observe: 'response' }
      )
      .pipe(map(res => true))
      .pipe(catchError(error => error.status == '304' ? of(false) : throwError(error)));
  };
}
