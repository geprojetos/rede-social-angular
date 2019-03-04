import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { TimelineCardInterface } from '../../interfaces/timeline-card/timeline-card-interface';

const api = environment.development;

@Injectable()
export class TimelineCardService {

  constructor(
    private _http: HttpClient
  ) { }

  listCards(userName: string): Observable<TimelineCardInterface> {

    return this._http
      .get<TimelineCardInterface>(`${ api }/${ userName }/photos`)
  }
}
