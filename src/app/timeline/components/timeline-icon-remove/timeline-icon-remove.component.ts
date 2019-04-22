import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-remove',
  templateUrl: './timeline-icon-remove.component.html',
  styleUrls: ['./timeline-icon-remove.component.css']
})
export class TimelineIconRemoveComponent {

  @Output() removeCard: EventEmitter<any> = new EventEmitter();

  remove() {

    this.removeCard.emit('removeCard')
  }

}
