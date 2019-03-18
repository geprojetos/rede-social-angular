import { Pipe, PipeTransform } from '@angular/core';
import { TimelineCardInterface } from '../../interfaces/timeline-card/timeline-card-interface';

@Pipe({
  name: 'timelineSearchCards'
})
export class TimelineSearchPipe implements PipeTransform {

  transform(cards: TimelineCardInterface[] = [], digitado: string) {
    
    if(digitado) {
      
      digitado = digitado.trim().toLowerCase();

      return cards.filter(card => card.description.toLowerCase().includes(digitado))
    };

    return cards;
  }

}
