import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { TimelineCardInterface } from '../../interfaces/timeline-card/timeline-card-interface';
import { TimelineCardService } from '../../services/timeline-card/timeline-card.service';

@Injectable()
export class TimelineCardResolve implements Resolve<TimelineCardInterface[]> {

    constructor(
        private _cardService: TimelineCardService
    ) { }

    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): TimelineCardInterface[] | Observable<TimelineCardInterface[]> | Promise<TimelineCardInterface[]> {

        const userName = route.params['userName'];
                
        return this._cardService.listaCardsPagination(userName, 1)
    }
}