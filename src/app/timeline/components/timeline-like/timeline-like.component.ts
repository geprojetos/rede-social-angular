import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-like',
  templateUrl: './timeline-like.component.html',
  styleUrls: ['./timeline-like.component.css']
})
export class TimelineLikeComponent {

  @Input() likes: number = 0;
  @Input() icon: string = 'fa-heart-o';

  constructor() { }
}
